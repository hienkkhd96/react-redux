import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      <Box pt={4}>
        <Routes>
          <Route path="/:productId" element={<DetailPage />} />
          <Route path="*" element={<ListPage />} />
        </Routes>
      </Box>
    </div>
  );
}

export default ProductFeature;
