import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { rotationQuaternionForCoordinates } from "../utils/GetLocation";
import { Popconfirm,Popover } from 'antd'
import * as THREE from "three";
import { useState } from "react";
import 'antd/dist/antd.css'

const MoonRadius = 2;
const positionSatelite = [0, MoonRadius + 0.04, 0];

const store = [
  { name: 'outside', color: 'lightpink' },
  { name: 'inside', color: 'lightblue' }
  // ...
]

export default function LandingSite(props) {
  var string= "station: Apollo"+props.station.apollo+ "\n\t"+", latitude: "+props.station.lat+ "\n\t"+", longitude: "+props.station.lat
  
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
        <Html distanceFactor={1.5} >
        <Popover title={props.station.apollo} content={string} onConfirm={props.onClick}  
     okText="none" >
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              borderRadius: "2px",
              marginTop:"5px",
              // backgroundColor: "white",
              //position: "absolute",
            }}>
            <pre>{props.station.apollo}</pre>
          </div>
            {/* <a color="white" href="#">.</a>  
             <p style={{color:"blue"}}>.</p> */}
           </Popover>
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