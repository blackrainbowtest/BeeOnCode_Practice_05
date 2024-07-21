import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import ProductSubCategory from "./ProductSubCategory/ProductSubCategory";

const MainContainer = styled(Box)(
  ({ theme }) => `
  width: 100%;
  min-height: 80px;
  padding: 30px 30px 0px 30px;
  display: flex;
  align-items: center;
`
);

function ProductClassification({ props }) {
  const {
    gender,
    setGender,
    selectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  } = props;

  return (
    <MainContainer>
      <ProductSubCategory
        props={{ selectedSubCategory, setSelectedSubCategory, selectedCategory }}
      />
    </MainContainer>
  );
}

export default memo(ProductClassification);
