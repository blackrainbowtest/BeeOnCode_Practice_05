import { Box } from "@mui/material";
import { memo, useCallback } from "react";
import styled, { css } from "styled-components";
import ProductStonesType from "./ProductStonesType";
import ProductStonesCount from "./ProductStonesCount";
import ProductStonesDiametr from "./ProductStonesDiametr";
import ProductStonesWeight from "./ProductStonesWeight/ProductStonesWeight";
import ProductStonesQuality from "./ProductStonesQuality";
import ProductStonesPrice from "./ProductStonesPrice";
import ProductStonesNumber from "./ProductStonesNumber";
import ProductStonesGIA from "./ProductStonesGIA";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";
import { useDispatch } from "react-redux";
import { addStone, removeStone } from "features/Product/ProductSlice";

function ProductStoneForm({ stone, index, canDelete, addNew }) {
  const dispatch = useDispatch();

  const handleRemoveStone = useCallback(() => {
    dispatch(removeStone());
  }, [dispatch]);

  const handleAddStone = useCallback(() => {
    dispatch(addStone());
  }, [dispatch]);

  return (
    <ContentContainer>
      <ProductStonesType props={{ stone, index }} />
      <ProductStonesCount props={{ stone, index }} />
      <ProductStonesDiametr props={{ stone, index }} />
      <ProductStonesWeight props={{ stone, index }} />
      <ProductStonesQuality props={{ stone, index }} />
      <ProductStonesPrice props={{ stone, index }} />
      <ProductStonesGIA props={{ stone, index }} />
      <ProductStonesNumber props={{ stone, index }} />
      <AddNewContainer>
        {canDelete ? (
          <Empty />
        ) : (
          <ButtonRemoveComponent index={index} callback={handleRemoveStone} />
        )}
        {addNew ? <ButtonAddComponent callback={handleAddStone} /> : <Empty />}
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

const Empty = styled(Box)(() => ({
  minWidth: "24px",
}));
