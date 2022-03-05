import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const navigate = useNavigate();
  const productUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail.url}`
    : "https://via.placeholder.com/444";
  const handleProductClick = () => {
    navigate(`/products/${product.id}/`);
  };
  return (
    <div>
      <Box padding={1} onClick={handleProductClick}>
        <img src={productUrl} alt="" width="100%" />
        <Typography variant="body2" textAlign="left">
          {product.name}
        </Typography>
        <Typography variant="body2" textAlign="left">
          <Box component="span" fontSize="16px" fontWeight="bold">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent === 0
            ? null
            : ` -${product.promotionPercent}%`}
        </Typography>
      </Box>
    </div>
  );
}

export default Product;
