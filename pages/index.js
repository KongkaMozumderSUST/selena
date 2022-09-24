import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LandingSite from "../components/LandingSite";
import ShallowMoonquake from "../data/nakamura_1979_sm_locations.json";
import DeepMoonquake from "../data/nakamura_2005_dm_locations.json";
import * as THREE from "three";

//import "./App.css";

const MoonRadius = 2;

const Sphere = () => {
  const base = new THREE.TextureLoader().load("./moon.jpg");
  const ref = useRef();
   //useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh visible castShadow >
      <directionalLight intensity={0.5} />
      <sphereGeometry attach='geometry' args={[MoonRadius, 100, 100]} />
      <meshBasicMaterial map={base} color='white' />
    </mesh>
  );
};
export default function Home(props) {
  return (
    <Canvas style={{ backgroundColor: "black", height: "100vh" }}>
      <OrbitControls />
      <Sphere />
      {ShallowMoonquake.map((x) => (
        <LandingSite site={{ lat: x.Lat, long: x.Long }} color='green' />
      ))}
      {DeepMoonquake.map((x) => (
        <LandingSite site={{ lat: x.Lat, long: x.Long }} color='red' />
      ))}
      <ambientLight />
    </Canvas>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `http://localhost:3000/data/nakamura_1979_sm_locations.json`
//   );
//   const data = await res.json();
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }
