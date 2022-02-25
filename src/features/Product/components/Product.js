import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <div>
      <Box padding={1}>
        <Skeleton variant="rectangular" width="100%" height={118} />
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          {product.salePrice}
          {product.promotionPercent === 0
            ? null
            : ` - ${product.promotionPercent}%`}
        </Typography>
      </Box>
    </div>
  );
}

export default Product;
