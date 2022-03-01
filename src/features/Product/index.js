import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Additional from "./components/DescriptonProduct/Additional";
import Description from "./components/DescriptonProduct/Description";
import Reviews from "./components/DescriptonProduct/Reviews";
import ProductMenu from "./components/ProductMenu";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      <Box pt={4}>
        <Routes>
          <Route path="" element={<ListPage />}></Route>
          <Route path=":productId" element={<DetailPage />}>
            <Route path="" element={<ProductMenu />}>
              <Route path="" element={<Description />} />
              <Route path="additional" element={<Additional />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Box>
    </div>
  );
}

export default ProductFeature;
