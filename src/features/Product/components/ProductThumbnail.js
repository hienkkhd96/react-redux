import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail.url}`
    : "https://via.placeholder.com/444";
  return (
    <Box>
      <img src={thumbnailUrl} alt="thumbnail" width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
