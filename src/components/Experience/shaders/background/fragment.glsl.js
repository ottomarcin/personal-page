import displacement from '../common/displacement.glsl.js';

export default /*glsl*/
`
varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;
uniform float uBackgroundMultiplier;
uniform vec3 uUpperPatternColor;
uniform vec3 uDownPatternColor;
uniform vec3 uBackgroundColor;

${displacement}

void main(){
    float elevation = displacementFunction(vPosition.xy / uBackgroundMultiplier);
    float upperPattern = step(0.97, elevation);
    float thresholdValue = 0.3;
    float lowerPattern = step(thresholdValue, elevation) * (1.- step(thresholdValue*1.2, elevation));
    // float lowerPattern = step(0.2, elevation) * (1.- step(0.24, elevation));
    vec3 orangeColor = vec3(0.9, 0.4, 0.003);
    // vec3 blueColor = vec3(0.73,0.82,0.87);
    // vec3 blueColor = vec3(0.75, 0.88, 0.85);
    // vec3 blueColor = vec3(0.56,0.79,0.85);
    // vec3 blueColor = vec3(0.49, 0.65,0.737);
    // vec3 blueColor = vec3(0.43,0.65,0.74);
    vec3 blueColor = vec3(uUpperPatternColor);
    vec3 whiteColor = vec3(1., 1., 1.);
    // vec3 brownColor = vec3(0.71,0.62,0.51);//brazowy
    vec3 brownColor = vec3(uDownPatternColor);//brazowy
    // vec3 brownColor = vec3(0.250, 0.168, 0.090);//brazowy
    vec3 upperPatternColor = blueColor * upperPattern;
    // vec3 upperPatternColor = whiteColor * upperPattern;
    vec3 lowerPatternColor = brownColor * lowerPattern;
    vec3 background =clamp(( 1. - (upperPattern + lowerPattern)) * uBackgroundColor, 0., 1.);
    gl_FragColor = vec4(background + upperPatternColor + lowerPatternColor, 1.);
}
`;
