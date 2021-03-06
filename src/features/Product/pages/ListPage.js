import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import categoryApi from "../../../API/categoryApi";
import productApi from "../../../API/productApi";
import FilterProducts from "../components/FilterProducts";
import FilterByViewer from "../components/FilterProducts/FilterByViewer";
import ProduclistSkeleton from "../components/ProducListSkeleton";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";

ListPage.propTypes = {};
const useStyles = makeStyles({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "20px",
  },
});

function ListPage(props) {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 10,
  });
  const queryPrams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number(params._page) || 1,
      _limit: Number(params._limit) || 10,
      _sort: params._sort || "salePrice:asc",
    };
  }, [location.search]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const reponse = await productApi.getAll(queryPrams);
        setProductList(reponse.data);
        setPagination(reponse.pagination);
      } catch (error) {
        console.log("faled to get product list", error);
      }
      setLoading(false);
    })();
  }, [queryPrams]);
  useEffect(() => {
    let isFetch = true;
    (async () => {
      try {
        if (!!isFetch) {
          const reponse = await categoryApi.getAll();
          setCategoryList(reponse);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      isFetch = false;
    };
  }, []);
  const handleChangePage = (e, page) => {
    const filters = {
      ...queryPrams,
      _page: page,
    };
    navigate({
      pathname: navigate.location,
      search: queryString.stringify(filters),
    });
  };
  const handleSortChange = (value) => {
    const filters = { ...queryPrams, _sort: value };
    navigate({
      pathname: navigate.location,
      search: queryString.stringify(filters),
    });
  };
  const handleFilterChange = (newFilter) => {
    const filters = {
      ...queryPrams,
      ...newFilter,
    };
    navigate({
      pathname: navigate.location,
      search: queryString.stringify(filters),
    });
  };
  return (
    <div>
      <Box>
        <Container>
          <Grid container>
            <Grid item className={classes.left}>
              <Paper elavation={0}>
                <FilterProducts
                  productList={productList}
                  filters={queryPrams}
                  onChange={handleFilterChange}
                  categoryList={categoryList}
                />
              </Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elavation={0}>
                <ProductSort
                  currentSort={queryPrams._sort}
                  onChange={handleSortChange}
                />
                <FilterByViewer
                  filters={queryPrams}
                  onChange={handleFilterChange}
                  categoryList={categoryList}
                />
                {loading ? (
                  <ProduclistSkeleton length={productList.length} />
                ) : (
                  <ProductList data={productList} />
                )}
                <Box className={classes.pagination}>
                  <Pagination
                    count={Math.ceil(pagination.total / pagination.limit)}
                    color="primary"
                    page={pagination.page}
                    onChange={handleChangePage}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
