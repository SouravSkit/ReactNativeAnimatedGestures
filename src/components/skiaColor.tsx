import React from 'react';
import { Skia, Canvas, Path, Shader } from '@shopify/react-native-skia';
import { Dimensions } from 'react-native';

const source = Skia.RuntimeEffect.Make(`
  vec3 color1 = vec3(0.635, 0.58, 0.89);
  vec3 color2 = vec3(0.58, 0.89, 0.882);
  
  half4 main(float2 xy) {
    float t = xy.y / ${Dimensions.get('window').height};
    float tAdjusted = t * t; 
    
    vec3 color = mix(color1, color2, tAdjusted);
    return vec4(color, 1);
  }
`)!;

export default function TestView() {
  if (!source) {
    throw new Error("Couldn't compile the shader");
  }

  return (
    <Canvas style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height,backgroundColor:'red' }}>
      <Path path="M 0 0 L 1048 0 L 1048 583 L 0 583 Z">
        <Shader source={source} />
      </Path>
    </Canvas>
  );
}