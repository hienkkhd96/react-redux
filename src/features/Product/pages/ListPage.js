import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import productApi from "../../../API/productApi";
import ProduclistSkeleton from "../components/ProducListSkeleton";
import ProductList from "../components/ProductList";

ListPage.propTypes = {};
const useStyles = makeStyles({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
});

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const reponse = await productApi.getAll({
          _start: 0,
          _limit: 10,
        });
        setProductList(reponse.data);
        console.log(reponse.data);
      } catch (error) {
        console.log("faled to get product list", error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Box>
        <Container>
          <Grid container>
            <Grid item className={classes.left}>
              <Paper elavation={0}>Left column</Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elavation={0}>
                {loading ? (
                  <ProduclistSkeleton />
                ) : (
                  <ProductList data={productList} />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
