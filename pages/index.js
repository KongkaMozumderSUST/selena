import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import LandingSite from "../components/LandingSite";
import ShallowMoonquake from "../data/nakamura_1979_sm_locations.json";
import DeepMoonquake from "../data/nakamura_2005_dm_locations.json";
import ApolloStation from "../data/LM.json";
import * as THREE from "three";

//import "./App.css";

const MoonRadius = 2;

const Sphere = () => {
  const ref = useRef();
  //useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  const displacementMap = new THREE.TextureLoader().load(
    "./displacementMap.jpg"
  );
  const base = new THREE.TextureLoader().load("./moon.jpg");

  return (
    <mesh visible castShadow ref={ref}>
      <sphereGeometry attach='geometry' args={[MoonRadius, 100, 100]} />
      <meshPhongMaterial
        map={base}
        displacementMap={displacementMap}
        displacementScale={0.08}
        shininess={30}
        specular={0x111111}
        emissive={0x111111}
        color='white'
      />
    </mesh>
  );
};

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new THREE.CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/skyboxArt/right.png",
    "/skyboxArt/left.png",
    "/skyboxArt/top.png",
    "/skyboxArt/bottom.png",
    "/skyboxArt/front.png",
    "/skyboxArt/back.png",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
};
export default function Home(props) {
  return (
    <>
      <Canvas style={{ backgroundColor: "black", height: "100vh" }}>
        <OrbitControls />
        <Sphere />
        {ApolloStation.map((x) => (
          <>
            <LandingSite
              station={{ lat: x.Lat, long: x.Long, apollo: x.LM }}
              color='blue'
            />
          </>
        ))}
        {/*       
      {ShallowMoonquake.map((x) => (
        <LandingSite site={{ lat: x.Lat, long: x.Long }} color='blue' />
      ))}
      {DeepMoonquake.map((x) => (
        <LandingSite site={{ lat: x.Lat, long: x.Long }} color='red' />
      ))} */}
        <SkyBox />
        <ambientLight />
        <directionalLight position={[5, 3, 5]} color={0xffffff} intensity={1} />
      </Canvas>
    </>
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
