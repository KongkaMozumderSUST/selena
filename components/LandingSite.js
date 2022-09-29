import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { rotationQuaternionForCoordinates } from "../utils/GetLocation";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";


const MoonRadius = 2;

export default function LandingSite(props) {
  const [state, setState] = useState(true);
  const positionSatelite = [
    0,
    MoonRadius + MoonRadius * (props.station.scaling - 1) + 0.04,
    0,
  ];

  var string =
    "lat: " + props.station.lat + "\n\t" + ", long: " + props.station.lat;
  var station = props.station.apollo;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const rotationQuaternion = rotationQuaternionForCoordinates(
    props.station.lat,
    props.station.long
  );
  const ref = useRef();

  console.log(rotationQuaternion);
  return (
    <group ref={ref} quaternion={rotationQuaternion}>
      <mesh {...props} position={positionSatelite}>
        <sphereGeometry args={[0.035]} rotateY={1} />
        <meshBasicMaterial opacity={1} color={props.color} />
        <Html distanceFactor={2}>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              borderRadius: "2px",
              padding: "2px",
              position: "absolute",
            }}>
            <Typography
              sx={{ p: 1 }}
              variant='title'
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup='true'
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}>
              {station}
            </Typography>

            <Popover
              id='mouse-over-popover'
              sx={{
                pointerEvents: "none",
                BorderColor: "black",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus>
              <Typography variant='subtitle2'>{station}</Typography>
              <Typography variant='caption'>{string}</Typography>
            </Popover>
          </div>
        </Html>
      </mesh>
    </group>
  );
}
