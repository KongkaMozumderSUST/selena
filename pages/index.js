import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import LandingSite from "../components/LandingSite";
import ShallowMoonquake from "../data/nakamura_1979_sm_locations.json";
import DeepMoonquake from "../data/nakamura_2005_dm_locations.json";
import ApolloStation from "../data/LM.json";
import Meteroite from "../data/meteroite.json";
import * as THREE from "three";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useCallback } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
//import "./App.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

import { alpha } from "@mui/material/styles";

import SidebarItems from "../components/ui/SiderbarItems";
const drawerWidth = 240;

const MoonRadius = 2;

const Sphere = ({ scaling, station, dm, sm, meteroite, rotation }) => {
  // console.log(scale);
  const ref = useRef();
  if (rotation) useFrame(() => (ref.current.rotation.y += 0.005));
  const displacementMap = new THREE.TextureLoader().load(
    "./displacementMap.jpg"
  );
  const base = new THREE.TextureLoader().load("./moon.jpg");

  return (
    <group ref={ref}>
      <mesh visible castShadow scale={scaling}>
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
      {station &&
        ApolloStation.map((x) => (
          <>
            <LandingSite
              station={{
                lat: x.Lat,
                long: x.Long,
                apollo: x.LM,
                scaling: scaling,
              }}
              color='blue'
            />
          </>
        ))}

      {sm &&
        ShallowMoonquake.map((x) => (
          <LandingSite
            station={{ lat: x.Lat, long: x.Long, scaling: scaling }}
            color='green'
          />
        ))}
      {dm &&
        DeepMoonquake.map((x) => (
          <LandingSite
            station={{ lat: x.Lat, long: x.Long, scaling: scaling }}
            color='red'
          />
        ))}
      {meteroite &&
        Meteroite.map((x) => (
          <LandingSite
            station={{ lat: x.Lat, long: x.Long, scaling: scaling }}
            color='hotpink'
          />
        ))}
    </group>
  );
};

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new THREE.CubeTextureLoader();

  const texture = loader.load([
    "/skybox2/right.png",
    "/skybox2/left.png",
    "/skybox2/top.png",
    "/skybox2/bottom.png",
    "/skybox2/front.png",
    "/skybox2/back.png",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  color: "black",
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Home(props) {
  //  const [zoomType, setZoomtype] = useState(1);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [station, setStation] = useState(true);
  const [dm, setDM] = useState(false);
  const [sm, setSM] = useState(false);
  const [meteroite, setMeteriote] = useState(false);
  const [rotation, setRotation] = useState(true);
  const [scaling, setScale] = useState(1);
  const ZoomIn = (e) => {
    // setZoomtype(1 + Math.random());
    setScale((scaling) => scaling + 0.1);
  };
  const ZoomOut = (e) => {
    setScale((scaling) => scaling - 0.1);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const ApolloStationShow = () => {
    setStation(true);
    setDM(false);
    setSM(false);
    setMeteriote(false);
  };
  const DeepMoonQuakeShow = () => {
    setStation(false);
    setDM(true);
    setSM(false);
    setMeteriote(false);
  };
  const ShallowMoonQuakeShow = () => {
    setStation(false);
    setDM(false);
    setSM(true);
    setMeteriote(false);
  };
  const MeteroiteMoonQuakeShow = () => {
    setStation(false);
    setDM(false);
    setSM(false);
    setMeteriote(true);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant='permanent'
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#0A0927",
            color: "white",
          },
        }}>
        <DrawerHeader>
          <IconButton
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          {open && (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <h1>
                  <ChevronRightIcon />
                </h1>
              ) : (
                <Typography sx={{ color: "white" }}>
                  Moon
                  <ChevronLeftIcon />
                </Typography>
              )}
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          <Box variant='button' onClick={ApolloStationShow}>
            <SidebarItems key={1} name={"Apollo Station"} open={open} />
          </Box>
          <Box variant='button' onClick={DeepMoonQuakeShow}>
            <SidebarItems key={2} name={"Deep Moonquake"} open={open} />
          </Box>
          <Box variant='button' onClick={ShallowMoonQuakeShow}>
            <SidebarItems key={3} name={"Shallow Moonquake"} open={open} />
          </Box>
          <Box variant='button' onClick={MeteroiteMoonQuakeShow}>
            <SidebarItems
              key={4}
              name={"Meteroite Moonquake"}
              open={open}
              onClick={MeteroiteMoonQuakeShow}
            />
          </Box>
        </List>
      </Drawer>

      <Canvas
        style={{
          backgroundColor: "black",
          height: "100vh",
          position: "absolute",
        }}>
        <OrbitControls />
        <Sphere
          scaling={scaling}
          station={station}
          meteroite={meteroite}
          dm={dm}
          sm={sm}
          rotation={rotation}
        />
        {/* {station &&
          ApolloStation.map((x) => (
            <>
              <LandingSite
                station={{
                  lat: x.Lat,
                  long: x.Long,
                  apollo: x.LM,
                  scaling: scaling,
                }}
                color='blue'
              />
            </>
          ))}

        {sm &&
          ShallowMoonquake.map((x) => (
            <LandingSite
              station={{ lat: x.Lat, long: x.Long, scaling: scaling }}
              color='green'
            />
          ))}
        {dm &&
          DeepMoonquake.map((x) => (
            <LandingSite
              station={{ lat: x.Lat, long: x.Long, scaling: scaling }}
              color='red'
            />
          ))} */}

        <SkyBox />
        <ambientLight />
        <directionalLight position={[5, 3, 5]} color={0xffffff} intensity={1} />
        <Html>
          <div
            style={{
              position: "relative",
              top: "40vh",
              left: "30vw",
            }}>
            <Stack
              sx={{ bottom: "0", position: "absolute" }}
              direction='row'
              spacing={2}>
              <IconButton
                aria-label='delete'
                size='large'
                onClick={ZoomIn}
                sx={{
                  backgroundColor: "white",
                  ":hover": { backgroundColor: "blue" },
                }}>
                <AddIcon sx={{ color: "black", fontSize: "22px" }} />
              </IconButton>
              <IconButton
                aria-label='delete'
                size='large'
                onClick={ZoomOut}
                sx={{
                  backgroundColor: "white",
                  ":hover": { backgroundColor: "blue" },
                }}>
                <RemoveIcon sx={{ color: "black", fontSize: "22px" }} />
              </IconButton>
              <IconButton
                aria-label='delete'
                size='large'
                onClick={(e) => {
                  setRotation(!rotation);
                }}
                sx={{
                  backgroundColor: "white",
                  ":hover": { backgroundColor: "blue" },
                }}>
                <ThreeDRotationIcon sx={{ color: "black", fontSize: "22px" }} />
              </IconButton>
            </Stack>
          </div>
        </Html>
      </Canvas>
    </Box>
  );
}
