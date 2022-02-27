import React from "react";
import PropTypes from "prop-types";
import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
ProduclistSkeleton.propTypes = {
  length: PropTypes.number,
};
ProduclistSkeleton.defaultProps = {
  length: 10,
};

function ProduclistSkeleton({ length }) {
  const arraySkeleton = new Array(length);
  return (
    <div>
      <Grid container>
        {Array.from(arraySkeleton).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="210px" height="210px" />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProduclistSkeleton;
