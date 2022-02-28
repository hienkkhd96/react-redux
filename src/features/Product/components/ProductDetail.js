import { Box, createTheme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import QuantityField from "../../../component/Fields/QuantityField";

const theme = createTheme();
const useStyles = makeStyles({
  root: {},
  typeProduct: {
    color: "blue",
    textDecoration: "none",
    cursor: "pointer",
  },
  name: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  description: {
    marginTop: "10px",
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: "1.7",
  },
  price: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1),
    marginTop: "10px",
  },
  salePrice: {
    color: "white",
    fontSize: "30px",
    fontWeight: "500",
  },
  originalPrice: {
    marginLeft: "10px",
    color: "rgba(255, 255, 255, 0.5)",
    textDecoration: "line-through",
    fontStyle: "italic",
    fontSize: "18px",
  },
  promotionPercent: {
    marginLeft: "10px",
    color: "white",
  },
  quantity: {
    marginTop: "10px",
  },
});
ProductDetail.propTypes = {
  product: PropTypes.object,
};
function ProductDetail({ product = {} }) {
  const { category } = product;
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClickType = () => {
    navigate({
      pathname: "/products/",
      search: `?_limit=10&_page=1&_sort=salePrice%3Aasc&category.id=${category?.id}`,
    });
  };
  return (
    <Box>
      <Typography>
        Phân loại:
        <span className={classes.typeProduct} onClick={handleClickType}>
          {product.category?.name}
        </span>
      </Typography>
      <Typography variant="h4" className={classes.name}>
        {product.name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {product.shortDescription}
      </Typography>
      <Box className={classes.price}>
        <Typography variant="span" className={classes.salePrice}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice) ?? ""}
        </Typography>
        {!!product.promotionPercent && (
          <Typography variant="span" className={classes.originalPrice}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.originalPrice)}
          </Typography>
        )}
        {!!product.promotionPercent && (
          <Typography variant="span" className={classes.promotionPercent}>
            {`-${product.promotionPercent}%`}
          </Typography>
        )}
      </Box>
      <Box className={classes.quantity}>
        <QuantityField productId={product.id} />
      </Box>
    </Box>
  );
}

export default ProductDetail;
