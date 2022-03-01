/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useMemo } from "react";
const useStyles = makeStyles({
  root: {},
  list: {
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    marginLeft: "10px",
  },
});
FilterByViewer.propTypes = {
  filters: PropTypes.object.isRequired,
  productList: PropTypes.array,
  onChange: PropTypes.func,
};

function FilterByViewer({ filters = {}, onChange, categoryList = [] }) {
  const classes = useStyles();
  const filterId = "category.id";
  const id = Math.ceil(filters[filterId] - 1);
  const categoryName = categoryList.map((x) => x.name);
  const itemName = categoryName[id];
  const LIST_FILTERS = [
    {
      id: 1,
      getLabel: () => "Giao hàng miễn phí",
      isActive: (filters) => filters.isFreeShip,
      isVisible: () => true,
      onToggle: (filters) => {
        const newFilters = filters;
        if (!!newFilters.isFreeShip === true) {
          delete newFilters.isFreeShip;
        } else {
          newFilters.isFreeShip = true;
        }
        return newFilters;
      },
    },
    {
      id: 2,
      getLabel: () => "Có khuyến mãi",
      isActive: () => {},
      isVisible: (filters) => filters.isPromotion,
      isRemoveable: () => {},
      onRemove: (filters) => {
        delete filters.isPromotion;
        return filters;
      },
      onToggle: () => {},
    },
    {
      id: 3,
      getLabel: () =>
        `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
      isActive: () => {},
      isVisible: (filters) => filters.salePrice_lte || filters.salePrice_gte,
      isRemoveable: () => {},
      onRemove: (filters) => {
        delete filters.salePrice_gte;
        delete filters.salePrice_lte;
        return filters;
      },
      onToggle: () => {},
    },
    {
      id: 4,
      getLabel: () => {},
      isActive: () => {},
      isVisible: (filters) => filters[filterId],
      isRemoveable: () => {},
      onRemove: (filters) => {
        delete filters[filterId];
        return filters;
      },
      onToggle: () => {},
    },
  ];
  const visibleList = useMemo(() => {
    return LIST_FILTERS.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <Box component="ul" className={classes.list}>
      {visibleList.map((item) => (
        <li key={item.id} className={classes.item}>
          <Chip
            label={item.getLabel(filters) || itemName}
            color={item.isActive(filters) ? "primary" : "default"}
            clickable={!item.isRemoveable}
            onClick={
              item.isRemoveable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = item.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              !item.isRemoveable
                ? null
                : () => {
                    if (!onChange) return;
                    else {
                      const newFilters = item.onRemove(filters);
                      onChange(newFilters);
                    }
                  }
            }
          ></Chip>
        </li>
      ))}
    </Box>
  );
}

export default FilterByViewer;
