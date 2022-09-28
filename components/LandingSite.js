import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { rotationQuaternionForCoordinates } from "../utils/GetLocation";
import { Popconfirm,Popover } from 'antd'
import * as THREE from "three";
import { useState } from "react";

const MoonRadius = 2;
const positionSatelite = [0, MoonRadius + 0.04, 0];
export default function LandingSite(props) {

  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  
  const rotationRef = useRef();
  const rotationQuaternion = rotationQuaternionForCoordinates(
    props.station.lat,
    props.station.long
  );
  console.log(rotationQuaternion);
  return (
    <group ref={rotationRef} quaternion={rotationQuaternion}>
      <mesh {...props} position={positionSatelite}  scale={active ? 2 : 1} onClick={(e) => setActive(!active || console.log("Box # 1 was clicked"))}
      // when <Hex/> is clicked I want to identify with a popup of conole each individual compnent clockwise
      // onClick={(e) => { if  (window.confirm('You Selected box # 1')) this.setActive(!active) } }
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
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
function Portals() {
  const [which, set] = useState(0)
  const { link, ...props } = store[which]
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  return <LandingSite onClick={() => set(link)} {...props} texture={maps[which]} />
}