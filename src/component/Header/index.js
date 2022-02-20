import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Dialog } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import Login from "../login";
import Register from "../Register";

const MODE = {
  login: "login",
  register: "register",
};
export default function Header() {
  const logedUser = useSelector((state) => state.user.curent);
  const isLogin = !!logedUser.id;
  const [openRegister, setOpenRegister] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.login);
  const closeRegister = () => {
    setOpenRegister(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hihu Shop
          </Typography>
          {!isLogin && (
            <Button
              color="inherit"
              onClick={() => setOpenRegister(!openRegister)}
            >
              Login
            </Button>
          )}
          {isLogin && (
            <Button color="inherit">
              <AccountCircle />
            </Button>
          )}
        </Toolbar>
        <Dialog open={openRegister}>
          {mode === MODE.login && (
            <>
              <Login
                openRegister={openRegister}
                setOpenRegister={() => setOpenRegister()}
                closeRegister={() => closeRegister()}
                setMode={() => setMode(MODE.register)}
                MODE={MODE}
              ></Login>
            </>
          )}
          {mode === MODE.register && (
            <>
              <Register
                openRegister={openRegister}
                setOpenRegister={() => setOpenRegister()}
                closeRegister={() => closeRegister()}
                setMode={() => setMode(MODE.login)}
                MODE={MODE}
              ></Register>
            </>
          )}
        </Dialog>
      </AppBar>
    </Box>
  );
}
