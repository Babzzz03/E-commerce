import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react'
import styled from 'styled-components'
import Floor from "../assets/3D-Model/Floor";
import { Model } from "../assets/3D-Model/Scene";
import * as THREE from "three";


const Container = styled.div`
width: 100vw;
height: 100vh;

position: fixed;
top: 0;
z-index: 1;
background-color: transparent;

`;




const KeyModel = () => {
  return (
    <Container >
      <Canvas camera={{fov: 14}} shadowmap={{ type: THREE.VSMShadowMap }}>
        <ambientLight intensity={0.4} />
        <directionalLight  position={[0, 1, 0]} castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}/>
        

        <Suspense fallback={null} >
           <Model /> 
         
        
      </Suspense>
       <ContactShadows opacity={0.7} scale={14} blur={1} far={10} resolution={256} position={[0, -0.4, 0]} color="#1e1c1c" />
        <Environment preset="night"/>
      
       
      </Canvas>
    </Container>
  );
}

export default KeyModel