import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { rotationQuaternionForCoordinates } from "../utils/GetLocation";
import * as THREE from "three";

const MoonRadius = 2;
const positionSatelite = [0, MoonRadius + 0.04, 0];
export default function LandingSite(props) {
  const rotationRef = useRef();
  const rotationQuaternion = rotationQuaternionForCoordinates(
    props.station.lat,
    props.station.long
  );
  console.log(rotationQuaternion);
  return (
    <group ref={rotationRef} quaternion={rotationQuaternion}>
      <mesh {...props} position={positionSatelite}>
        <sphereGeometry args={[0.025]} />
        <meshBasicMaterial opacity={1} color={props.color} />
        <Html distanceFactor={1.5}  >
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              borderRadius: "2px",
              // backgroundColor: "white",
              position: "absolute",
            }}>
            <pre>{props.station.apollo}</pre>
          </div>
        </Html>
      </mesh>
    </group>
  );
}
