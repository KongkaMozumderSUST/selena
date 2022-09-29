import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { rotationQuaternionForCoordinates } from "../utils/GetLocation";
import * as THREE from "three";

const MoonRadius = 2;

export default function LandingSite(props) {
  const positionSatelite = [
    0,
    MoonRadius + MoonRadius * (props.station.scaling - 1) + 0.04,
    0,
  ];
 
  const rotationQuaternion = rotationQuaternionForCoordinates(
    props.station.lat,
    props.station.long
  );
  const ref = useRef();
 // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  console.log(rotationQuaternion);
  return (
    <group ref={ref} quaternion={rotationQuaternion}>
      <mesh {...props} position={positionSatelite}>
        <sphereGeometry args={[0.025]} />
        <meshBasicMaterial opacity={1} color={props.color} />
        <Html>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              borderRadius: "2px",
              backgroundColor: "white",
              position: "absolute",
            }}>
            <pre>{props.station.apollo}</pre>
          </div>
        </Html>
      </mesh>
    </group>
  );
}
