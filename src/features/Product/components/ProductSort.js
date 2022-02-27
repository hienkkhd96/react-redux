import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá từ thấp đến cao" value="salePrice:asc" />
      <Tab label="Giá từ cao đến thấp" value="salePrice:desc" />
      <Tab label="Mới nhất" value="updated_at:desc" />
    </Tabs>
  );
}

export default ProductSort;
