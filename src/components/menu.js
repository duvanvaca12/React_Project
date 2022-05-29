import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import VolcanoIcon from "@mui/icons-material/Volcano";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const actions = [
  {
    icon: <HomeIcon />,
    name: "Home",
    link: <NavLink to="/volcanoes"></NavLink>,
  },
  {
    icon: <VolcanoIcon />,
    name: "Volcano information",
    link: <NavLink to="/volcanoes"></NavLink>,
  },
  {
    icon: <AccountCircleIcon />,
    name: "Login",
    link: <NavLink to="/volcanoes"></NavLink>,
  },
];

export default function Menu() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 20, right: 40 }}
        icon={<MenuIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.link}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
