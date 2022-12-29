import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotesIcon from '@mui/icons-material/Notes';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material";
import { useState } from "react";

const Layout = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const theme = createTheme();
    const [showDrawer, setShowDrawer] = useState(false);
    const drawerWidth = 240;

    const handleListItemClick = (path) => {
        setShowDrawer(false);
        location.pathname !== path && navigate(path);
    }
    

    const menuItems = [
        {
            id: 1,
            icon: <NotesIcon color="primary" />,
            text: "My Notes",
            path: "/"
        },
        {
            id: 2,
            icon: <AddCircleOutlineIcon color="primary" />,
            text: "Create Note",
            path: "/create"
        },
    ];

    const drawer = (
        <>
            <Toolbar sx={{justifyContent: "center"}}>
                <Typography variant="h5">Notes</Typography>
            </Toolbar>

            <List>
                { menuItems.map(item => (
                    <ListItem 
                        key={item.id}
                        disablePadding
                        sx={{background: item.path === location.pathname ? theme.palette.grey[200] : null }}
                    >
                        <ListItemButton onClick={() => handleListItemClick(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                )) }
            </List>
        </>
    );

    return (
        <>
            <Box component="div" sx={{display: "flex"}}>
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={{width: {md: `calc(100% - ${drawerWidth}px)`}}}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            size="large"
                            edge="start"
                            onClick={() => setShowDrawer((prev) => !prev)}
                            sx={{display: {md: "none"}}}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography sx={{flexGrow: 1}}>
                            {new Date().toDateString()}
                        </Typography>

                        <Typography marginRight={1}>John Doe</Typography>
                        <Badge
                            variant="dot"
                            overlap="circular"
                            anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                            color="warning"
                        >
                            <Avatar>JD</Avatar>
                        </Badge>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        ".MuiDrawer-paper": {width: drawerWidth},
                        display: {xs: "none", md: "block"}
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="temporary"
                    sx={{
                        width: "60%",
                        ".MuiDrawer-paper": {width: "60%"},
                        display: {md: "none"}
                    }}
                    open={showDrawer}
                    onClose={() => setShowDrawer(false)}
                >
                    {drawer}
                </Drawer>

                <Box 
                    component="main"
                    sx={{
                        width: "100%",
                        padding: theme.spacing(3)
                    }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </>
    );
}

export default Layout;