import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { rotationQuaternionForCoordinates } from "../utils/GetLocation";
import * as THREE from "three";

const MoonRadius = 2;
const positionSatelite = [0, MoonRadius, 0];
export default function LandingSite(props) {
  const rotationRef = useRef();
  const rotationQuaternion = rotationQuaternionForCoordinates(
    props.site.lat,
    props.site.long
  );
  console.log(rotationQuaternion);
  return (
    <group ref={rotationRef} quaternion={rotationQuaternion}>
      <mesh {...props} position={positionSatelite}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial opacity={1} color={props.color} />
      </mesh>
    </group>
  );
}
