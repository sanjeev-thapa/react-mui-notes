import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

const Layout = ({ children }) => {
    return (
        <>
            <AppBar
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography sx={{flexGrow: 1}}>
                        MUI Notes App
                    </Typography>

                    <Badge
                        variant="dot"
                        overlap="circular"
                        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                        color="warning"
                    >
                        <Avatar>ST</Avatar>
                    </Badge>
                </Toolbar>
            </AppBar>

            <Box>
                {children}
            </Box>
        </>
    );
}

export default Layout;