import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";

FilterByServices.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

const useStyles = makeStyles({
  root: {},
  head: {
    paddingTop: "10px",
    fontWeight: "bold",
    textAlign: "center",
  },
  service: {
    display: "block",
    textAlign: "left",
    height: "36px",
  },
});
function FilterByServices({ filters = {}, onChange }) {
  const classes = useStyles();
  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    if (!onChange) return;
    let newFilters = {};
    if (!!checked) {
      newFilters = {
        [name]: checked,
      };
    }
    if (!checked) {
      newFilters = filters;
      delete newFilters[name];
    }
    onChange(newFilters);
  };
  return (
    <Box>
      <Typography variant="h6" className={classes.head}>
        Dịch vụ
      </Typography>
      <Box>
        <FormControlLabel
          control={<Checkbox checked={!!filters.isFreeShip} />}
          label="Free ship"
          name="isFreeShip"
          onChange={handleServiceChange}
          className={classes.service}
        />
        <FormControlLabel
          control={<Checkbox checked={!!filters.isPromotion} />}
          label="Giảm giá"
          name="isPromotion"
          onChange={handleServiceChange}
          className={classes.service}
        />
      </Box>
    </Box>
  );
}

export default FilterByServices;
