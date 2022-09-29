import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Home from "@mui/icons-material/HomeRounded";
import Inbox from "@mui/icons-material/Mail";
import User from "@mui/icons-material/PersonRounded";
import Shop from "@mui/icons-material/ShoppingCartRounded";
import News from "@mui/icons-material/ArticleRounded";
import Reports from "@mui/icons-material/FlagRounded";
import Comments from "@mui/icons-material/ChatBubbleRounded";
import Back from "@mui/icons-material/ArrowBackRounded";
import ViewListIcon from "@mui/icons-material/ViewList";
import Link from "next/link";
const Icon = {
  Inbox: <Inbox />,
  Dashboard: <Home />,
  Users: <User />,
  Shop: <Shop />,
  News: <News />,
  Reports: <Reports />,
  Comments: <Comments />,
  Fixtures: <ViewListIcon />,
  "Go Back": <Back />,
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
