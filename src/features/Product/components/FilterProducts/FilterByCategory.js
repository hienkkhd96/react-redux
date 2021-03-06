import { createTheme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
const theme = createTheme();
const useStyles = makeStyles({
  root: {},
  head: {
    paddingTop: "10px",
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    margin: 0,
    paddingLeft: "10px",
    listStyleType: "none",
    cursor: "pointer",
  },
  item: {
    marginTop: "4px",
    textAlign: "left",
    color: theme.palette.secondary.dark,
  },
});
FilterByCategory.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
  categoryList: PropTypes.array,
};

function FilterByCategory({ filters = {}, onChange, categoryList = [] }) {
  const classes = useStyles();
  const handleCategoryClick = (values) => {
    if (onChange) {
      onChange({ "category.id": values.id });
    }
  };
  const handleAllClick = () => {
    delete filters["category.id"];
    onChange(filters);
  };
  return (
    <Box>
      <Typography className={classes.head}>Danh mục sản phẩm</Typography>
      <ul className={classes.list}>
        <li onClick={handleAllClick} className={classes.item}>
          Tất cả
        </li>
        {categoryList.map((category) => (
          <li
            className={classes.item}
            key={category.id}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
