import displacement from '../common/displacement.glsl.js';

export default /*glsl*/
`
#define PI 3.14159

uniform float uTime;
uniform vec2 uMousePosition;
uniform float uWindowSize;

varying float vElevation;
varying float vPerlin;
varying float vLightIntensity;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

// vec2 rotate(vec2 uv, float rotation, vec2 mid){
//     return(
//         vec2(
//             cos(rotation) * (uv.x - mid.x) - sin(rotation) * (uv.y - mid.y) + mid.x,
//             sin(rotation) * (uv.x - mid.x) + cos(rotation) * (uv.y - mid.y) + mid.y
//         )
//     );
// }

// vec4 permute(vec4 x)
// {
//     return mod(((x*34.0)+1.0)*x, 289.0);
// }

// // //	Classic Perlin 2D Noise 
// // //	by Stefan Gustavson
// // //
// // vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

// // float cnoise(vec2 P){
// //   vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
// //   vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
// //   Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
// //   vec4 ix = Pi.xzxz;
// //   vec4 iy = Pi.yyww;
// //   vec4 fx = Pf.xzxz;
// //   vec4 fy = Pf.yyww;
// //   vec4 i = permute(permute(ix) + iy);
// //   vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
// //   vec4 gy = abs(gx) - 0.5;
// //   vec4 tx = floor(gx + 0.5);
// //   gx = gx - tx;
// //   vec2 g00 = vec2(gx.x,gy.x);
// //   vec2 g10 = vec2(gx.y,gy.y);
// //   vec2 g01 = vec2(gx.z,gy.z);
// //   vec2 g11 = vec2(gx.w,gy.w);
// //   vec4 norm = 1.79284291400159 - 0.85373472095314 * 
// //     vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
// //   g00 *= norm.x;
// //   g01 *= norm.y;
// //   g10 *= norm.z;
// //   g11 *= norm.w;
// //   float n00 = dot(g00, vec2(fx.x, fy.x));
// //   float n10 = dot(g10, vec2(fx.y, fy.y));
// //   float n01 = dot(g01, vec2(fx.z, fy.z));
// //   float n11 = dot(g11, vec2(fx.w, fy.w));
// //   vec2 fade_xy = fade(Pf.xy);
// //   vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
// //   float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
// //   return 2.3 * n_xy;
// // }

// // Simplex 2D noise
// //
// vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

// float snoise(vec2 v){
//   const vec4 C = vec4(0.211324865405187, 0.366025403784439,
//            -0.577350269189626, 0.024390243902439);
//   vec2 i  = floor(v + dot(v, C.yy) );
//   vec2 x0 = v -   i + dot(i, C.xx);
//   vec2 i1;
//   i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
//   vec4 x12 = x0.xyxy + C.xxzz;
//   x12.xy -= i1;
//   i = mod(i, 289.0);
//   vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
//   + i.x + vec3(0.0, i1.x, 1.0 ));
//   vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
//     dot(x12.zw,x12.zw)), 0.0);
//   m = m*m ;
//   m = m*m ;
//   vec3 x = 2.0 * fract(p * C.www) - 1.0;
//   vec3 h = abs(x) - 0.5;
//   vec3 ox = floor(x + 0.5);
//   vec3 a0 = x - ox;
//   m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
//   vec3 g;
//   g.x  = a0.x  * x0.x  + h.x  * x0.y;
//   g.yz = a0.yz * x12.xz + h.yz * x12.yw;
//   return 130.0 * dot(m, g);
// }


// float displacementFunction(vec2 positionVector){
//     // float timeOffset = 0.5;
//     float timeOffset = sin(uTime*0.0001)*0.5;
//     return 1.+abs(timeOffset)-abs(snoise(vec2(positionVector.x*0.5+uTime*0.0001, positionVector.y*0.5))-timeOffset);
//     // return 1.-abs(snoise(vec2(positionVector.x*0.5+uTime*0.0001, positionVector.y*0.5)));
//     // return 1.-abs(cnoise(vec2(positionVector.x+uTime*0.0001, positionVector.y)));
// }
${displacement}

vec3 calculateNormals(vec3 positionVector)
{
    float diff = 0.02;
    //tworzenie sąsiednich punktów wokół biezącego
    vec3 neighbour1 = vec3(positionVector.xy + vec2(0.0, diff), 0.0);
    vec3 neighbour2 = vec3(positionVector.xy + vec2(diff, 0.0), 0.0);
    //współrzędna z jest obliczna na podstawie tej samej funkcji, przy pomocy ktorej obliczana jest wysokosc
    neighbour1.z = displacementFunction(neighbour1.xy);
    neighbour2.z = displacementFunction(neighbour2.xy);
    //następnie obliczane są pochodne w obu osiach
    vec3 tangent = neighbour1 - positionVector;
    vec3 bitangent = neighbour2 - positionVector;
    // a na koniec wektor normalny, który jest prostopadły do wektorów tangent i bitangent
    vec3 normal = cross(tangent, bitangent);
    return normal;
}


void main(){
    //First calcultion of matrix - standard procedure
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    /*
    * Calculating Z position with perlin noise
    */
    float elevation = displacementFunction(modelPosition.xy);//modelPosition zamiast uv uzywane gdy robilem gorki
    modelPosition.z = elevation; //passing calculated elevation to plane
    modelPosition.z -= 1.; //offset by -1, so pattern on the fg is correctly alligned with bg

    /*
    ** Calculating light
    */
    vec3 normal = calculateNormals(vec3(modelPosition.xy, elevation)); // calculating normal
    // vec3 normalsNormalized = normalize(normal); //normalizing normal vector, so it has the length of 1
    // // calculating mouse position in the plane, so light can move same way as mouse
    // vec2 mouseLightValue = vec2(-(uMousePosition.x-0.5)*2., (uMousePosition.y-0.5));
    // // calculating light direction by adding z = -1, which is in front and then normalizing
    // vec3 lightDirection = normalize(vec3(mouseLightValue, -1.)); //light in front corresponds to z = -1. y to chyba gora/dol, x to prawo/lewo
    // // calculating dot product of light directions and normals, which results in 
    // // http://learnwebgl.brown37.net/09_lights/lights_diffuse.html
    // // calculating intensity of light at given point
    // float dotProduct = dot(lightDirection, normalsNormalized);
    // float lightIntensity = clamp(dotProduct, 0.0, 1.0);

    /*
    ** Standard calculations of matrices
    */
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
    /*
    ** Varyings - passing data to fragment shader
    */
    vNormal = normal;
    vElevation = elevation;
    vUv = uv;
    vPosition = position;
    // vLightIntensity = lightIntensity;
}
`;
