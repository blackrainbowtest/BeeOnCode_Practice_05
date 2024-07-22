import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import ProductImages from "./ProductImages";
import ProductTags from "./ProductTags";
import ProductArticle from "./ProductArticle";

const MainContainer = styled(Box)(
  ({ theme }) => `
      width: 860px;
      background: ${theme.palette.background.main}!important;
      display: flex;
      align-items: center;
      gap: 30px;
      padding: 30px;
      `
);

function ProductDetails({ props }) {
  const { productData, setProductData } = props;
  return (
    <MainContainer>
      <ProductImages />
      <ProductTags />
      <ProductArticle props={{productData, setProductData}} />
    </MainContainer>
  );
}

export default memo(ProductDetails);
