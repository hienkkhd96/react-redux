import { Box, Container, createTheme, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "../components/Hooks/useProductDetail";
import ProductDetail from "../components/ProductDetail";
import ProductThumbnail from "../components/ProductThumbnail";
const theme = createTheme();
const useStyles = makeStyles({
  root: {},
  left: {
    width: "40%",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    width: "60%",
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "20px",
  },
});

DetailPage.propTypes = {};

function DetailPage() {
  const classes = useStyles();
  const params = useParams();
  const { loading, product } = useProductDetail(params.productId);
  if (loading) {
    return <Box>LOADING</Box>;
  }
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elavation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductDetail product={product} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
