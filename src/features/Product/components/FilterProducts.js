import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import FilterByCategory from "./FilterProducts/FilterByCategory";
import FilterByPrice from "./FilterProducts/FilterByPrice";
import FilterByServices from "./FilterProducts/FilterByServices";

FilterProducts.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  categoryList: PropTypes.array,
};

function FilterProducts({ filters = {}, onChange, categoryList = [] }) {
  const handleChange = (newFilter) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      _page: 1,
      ...newFilter,
    };
    onChange(newFilters);
  };
  return (
    <Box>
      <FilterByCategory
        categoryList={categoryList}
        filters={filters}
        onChange={handleChange}
      />
      <FilterByPrice filters={filters} onChange={handleChange} />
      <FilterByServices filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default FilterProducts;
