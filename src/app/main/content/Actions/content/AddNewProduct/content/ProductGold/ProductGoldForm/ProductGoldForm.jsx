import { Box } from "@mui/material";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import { memo, useCallback } from "react";
import styled, { css } from "styled-components";
import ProductGoldProb from "./ProductGoldProb";
import ProductGoldStartWeight from "./ProductGoldStartWeight";
import ProductGoldWeight from "./ProductGoldWeight";
import ProductGoldPrice from "./ProductGoldPrice";
import { useDispatch } from "react-redux";
import { addGold, removeGold } from "features/Product/ProductSlice";

function ProductGoldForm({ gold, index, canDelete, addNew }) {
  const dispatch = useDispatch();
  
  const handleRemoveWork = useCallback(() => {
    dispatch(removeGold(index));
  }, [dispatch, index]);

  const handleAddWork = useCallback(() => {
    dispatch(addGold());
  }, [dispatch]);

  return (
    <ContentContainer>
      <ProductGoldProb props={{ gold, index }} />
      <ProductGoldStartWeight props={{ gold, index }} />
      <ProductGoldWeight props={{ gold, index }} />
      <ProductGoldPrice props={{ gold, index }} />
      <AddNewContainer>
        {canDelete ? (
          <Empty />
        ) : (
          <ButtonRemoveComponent index={index} callback={handleRemoveWork} />
        )}
        {addNew ? <ButtonAddComponent callback={handleAddWork} /> : <Empty />}
      </AddNewContainer>
    </ContentContainer>
  );
}

export default memo(ProductGoldForm);

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
