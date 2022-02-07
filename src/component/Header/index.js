import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Register from "../Register";
export default function Header() {
  const [openRegister, setOpenRegister] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            // edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hihu Shop
          </Typography>
          <Button
            color="inherit"
            onClick={() => setOpenRegister(!openRegister)}
          >
            Register
          </Button>
        </Toolbar>
        {openRegister && (
          <Register
            openRegister={openRegister}
            setOpenRegister={() => setOpenRegister()}
          />
        )}
      </AppBar>
    </Box>
  );
}
