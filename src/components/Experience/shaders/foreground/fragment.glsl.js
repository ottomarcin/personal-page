export default /* glsl */ `

#define PI 3.14159
#define PI2 6.28318

uniform float uTime;
uniform vec2 uMousePosition;
uniform float uWindowSize;
uniform float uShadowVariable;
uniform float uAspectRatio;

varying float vElevation;
varying float vPerlin;
varying vec3 vNormal;
varying float vLightIntensity;

varying vec2 vUv;
varying vec3 vPosition;
varying float vCursorWindow;


float random (vec2 st) {
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

void main(){


    float elevation = vElevation; // elevation from vertex shader
    /*
    * window in geometry on mouse hover
    */
    
    // multiplying x axis by aspect ratio of plane preserves circular shape of window
    float strength = distance(vec2(vUv.x*uAspectRatio, vUv.y), vec2(uMousePosition.x*uAspectRatio, uMousePosition.y));
    strength = step(uWindowSize, strength);


    // /*
    // * Calculating light - normals are calced in vertex shader and imported as vNormal
    // */
    vec3 normalsNormalized = normalize(vNormal); //normalizing normal vector, so it has the length of 1
    // calculating mouse position in athe plane, so light can move same way as mouse
    vec2 mouseLightValue = vec2(-(uMousePosition.x-0.5)*2., -(uMousePosition.y-0.5));
    // calculating light direction by adding z = -1, which is in front and then normalizing
    vec3 lightDirection = normalize(vec3(mouseLightValue, -1.)); //light in front corresponds to z = -1. y to chyba gora/dol, x to prawo/lewo
    // calculating dot product of light directions and normals, which results in 
    // http://learnwebgl.brown37.net/09_lights/lights_diffuse.html
    // calculating intensity of light at given point
    float dotProduct = dot(lightDirection, normalsNormalized);
    float lightIntensity = clamp(dotProduct, 0.0, 1.0);

    /*
    ** Colors definition
    */
    vec3 blueColor = vec3(0.43,0.65,0.74);//niebieski
    vec3 lightBlueColor = vec3(1., 1., 1.);//niebieski jasny
    vec3 brownColor = vec3(0.250, 0.168, 0.090);//brazowy
    vec3 orangeColor = vec3(0.9, 0.4, 0.003);//pomaranczowy

    //claping light intensity
    float lightIntensityClamped = clamp(lightIntensity, 0., uShadowVariable)/uShadowVariable;

    float color = 1.-clamp(lightIntensity, 0., uShadowVariable)/uShadowVariable;

    /*
    ** mixing blue with white
    */
    //first approach
    // vec3 elevationColor = mix(blueColor, lightBlueColor, elevation*0.5);
    //second approach
    vec3 elevationColor = mix(lightBlueColor, blueColor, lightIntensity);

    vec3 mixedColor = mix(orangeColor, brownColor, color);

    // vec3 lightenedColor = elevationColor; //without 'light'
    vec3 lightenedColor = mix(mixedColor, elevationColor, lightIntensityClamped); //recent

    gl_FragColor = vec4(lightenedColor, strength); //poprawna wersja z przezroczystoscia
}`;
