import { Box, createTheme, Link as Connect } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const theme = createTheme();
const useStyles = makeStyles({
  root: {},
  description: {
    display: "flex",
    flexFlow: "row nowarp",
    justifyContent: "center",
    listStyleType: "none",
    alignItems: "center",
    "&>li": {
      padding: theme.spacing(2, 4),
      "&>a": {
        textDecoration: "none",
        color: theme.palette.grey[800],
      },
      "&>a.active": {
        textDecoration: "underline",
        color: theme.palette.primary.main,
      },
    },
  },
});

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const classes = useStyles();
  return (
    <Box>
      <Box component="ul" className={classes.description}>
        <li>
          <Connect component={NavLink} to="">
            Description
          </Connect>
        </li>
        <li>
          <Connect component={NavLink} to="additional">
            Additional
          </Connect>
        </li>
        <li>
          <Connect component={NavLink} to="reviews">
            Reviews
          </Connect>
        </li>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default ProductMenu;
