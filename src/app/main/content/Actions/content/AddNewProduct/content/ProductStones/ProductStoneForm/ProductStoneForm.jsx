import { Box } from "@mui/material";
import { memo } from "react";
import styled, { css } from "styled-components";
import ProductStonesType from "./ProductStonesType";
import ProductStonesCount from "./ProductStonesCount";
import ProductStonesDiametr from "./ProductStonesDiametr";
import ProductStonesWeight from "./ProductStonesWeight/ProductStonesWeight";
import ProductStonesQuality from "./ProductStonesQuality";
import ProductStonesPrice from "./ProductStonesPrice";
import ProductStonesNumber from "./ProductStonesNumber";
import ProductStonesGIA from "./ProductStonesGIA";
import ProductStonesRemove from "./ProductStonesRemove";
import ProductStonesAdd from "./ProductStonesAdd";

function ProductStoneForm({ stone, index, canDelete, addNew, callback }) {
  return (
    <ContentContainer>
      <ProductStonesType props={{ stone, index, callback }} />
      <ProductStonesCount props={{ stone, index, callback }} />
      <ProductStonesDiametr props={{ stone, index, callback }} />
      <ProductStonesWeight props={{ stone, index, callback }} />
      <ProductStonesQuality props={{ stone, index, callback }} />
      <ProductStonesPrice props={{ stone, index, callback }} />
      <ProductStonesGIA props={{ stone, index, callback }} />
      <ProductStonesNumber props={{ stone, index, callback }} />
      <AddNewContainer>
        {canDelete ? null : <ProductStonesRemove props={{ index, callback }} />}
        {addNew ? <ProductStonesAdd props={{ callback }} /> : null}
      </AddNewContainer>
    </ContentContainer>
  );
}

export default memo(ProductStoneForm);

const ContentContainer = styled(Box)(() =>
  css({
    width: "100%",
    display: "flex",
    gap: "10px",
  })
);

const AddNewContainer = styled(Box)(() => ({
  minWidth: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
