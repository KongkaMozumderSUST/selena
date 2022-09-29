import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import RocketIcon from "@mui/icons-material/Rocket";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircleIcon from "@mui/icons-material/Circle";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import ViewListIcon from "@mui/icons-material/ViewList";
import Link from "next/link";
const Icon = {
  "Apollo Station": <RocketIcon />,
  "Deep Moonquake": <CircleIcon />,
  "Shallow Moonquake": <AdjustIcon />,
  "Meteroite Moonquake": <NightlightRoundIcon />,

  //   Users: <User />,
  //   Shop: <Shop />,
  //   News: <News />,
  //   Reports: <Reports />,
  //   Comments: <Comments />,
  //   Fixtures: <ViewListIcon />,
  //   "Go Back": <Back />,
};

export default function SidebarItems(props) {
  const open = props.open;
  return (
    <ListItem variant='button' disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}>
        <ListItemIcon
          sx={{
            color: "white",
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}>
          {Icon[props.name]}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            fontSize: "10px",
            fontFamily: "Comfortaa",
            fontWeight: "normal",
          }}
          primary={props.name}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
}
