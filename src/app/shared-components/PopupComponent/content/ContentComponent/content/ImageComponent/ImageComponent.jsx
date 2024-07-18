import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

const MainContainer = styled(Box)(
  ({ theme }) => `
        width: 260px;
        min-height: 145px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        z-index: 1;
      `
);

function ImageComponent({ categoryImage, setCategoryImage }) {
  return <MainContainer sx={{ flexGrow: 1 }}>555</MainContainer>;
}

export default memo(ImageComponent);
