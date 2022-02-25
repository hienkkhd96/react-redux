import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Product from "./Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [] }) {
  return (
    <div>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
