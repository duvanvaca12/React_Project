import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Login from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import VolcanoIcon from '@mui/icons-material/Volcano';
import Typography from '@mui/material/Typography';
import hcbgImage from "/home/cesar/Documents/Proyect_React/volcano-data/src/Resources/background.jpg";
import '@fontsource/roboto/700.css';


export default function HomePage() {
    const [state, setState] = React.useState({
    menu: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {['Home', 'Volcano Information'].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <VolcanoIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
        <Divider />
        <List>
        {['Login'].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                {index % 2 === 0 ? <Login /> : <Login />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );

    return (

        <div class="bg_image"
        style={{
            backgroundImage: 'url('+hcbgImage+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
            textAlign: "center",
            paddingTop: "20em"
        }}
        >
            <Typography variant="h1" component="div" gutterBottom>
            Search Info About volcanos <br/>around the world
            </Typography>
            {['Menu'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    >
                    {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

        
        </div>
        
    );
}