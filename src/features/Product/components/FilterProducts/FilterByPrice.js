import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, createTheme, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const theme = createTheme();
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  head: {
    paddingTop: "10px",
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    marginTop: "16px",
    textAlign: "left",
    color: theme.palette.secondary.dark,
  },
  submit: {
    width: "50%",
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
    marginTop: "14px",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "black",
      opacity: "0.6 ",
      border: "none",
    },
  },
});
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

function FilterByPrice({ filters = {}, onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (
      Number(values.salePrice_lte) !== 0 ||
      Number(values.salePrice_gte) !== 0
    )
      onChange(values);
    else {
      delete filters.salePrice_gte;
      delete filters.salePrice_lte;
      onChange(filters);
    }
  };
  return (
    <Box>
      <Typography className={classes.head}>Giá</Typography>
      <Box className={classes.root}>
        <TextField
          className={classes.item}
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleOnChange}
          label="Từ"
        />
        <TextField
          className={classes.item}
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleOnChange}
          label="Đến"
        />
        <Button
          className={classes.submit}
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
        >
          Áp Dụng
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
