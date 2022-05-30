import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import VolcanoIcon from "@mui/icons-material/Volcano";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

const actions = [
  {
    icon: <HomeIcon />,
    name: "Home",
    link: "/",
  },
  {
    icon: <VolcanoIcon />,
    name: "Volcano information",
    link: "/volcanoes",
  },
  {
    icon: <AccountCircleIcon />,
    name: "Login",
    link: "/login",
  },
];

export default function Menu() {
  const navigate = useNavigate();
  const handleClick = React.useCallback(
    (link) => navigate(link, { replace: true }),
    [navigate]
  );
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 40, right: 40 }}
      icon={<MenuIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleClick(action.link)}
        />
      ))}
    </SpeedDial>
  );
}
