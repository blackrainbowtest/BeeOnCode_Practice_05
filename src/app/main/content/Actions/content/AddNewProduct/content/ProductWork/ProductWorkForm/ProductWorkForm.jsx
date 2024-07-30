import { Box } from "@mui/material";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import { memo, useCallback } from "react";
import styled, { css } from "styled-components";
import ProductWorkName from "./ProductWorkName";
import ProductWorkCount from "./ProductWorkCount";
import ProductWorkPrice from "./ProductWorkPrice";
import ProductWorkAmount from "./ProductWorkAmount";
import ProductWorkComment from "./ProductWorkComment";
import { useDispatch } from "react-redux";
import { addWork, removeWork } from "features/Product/ProductSlice";

function ProductWorkForm({ work, index, canDelete, addNew }) {
  const dispatch = useDispatch();

  const handleRemoveWork = useCallback(() => {
    dispatch(removeWork(index));
  }, [dispatch, index]);
  
  const handleAddWork = useCallback(() => {
    dispatch(addWork());
  }, [dispatch]);

  return (
    <ContentContainer>
      <ProductWorkName props={{ work, index }} />
      <ProductWorkCount props={{ work, index }} />
      <ProductWorkPrice props={{ work, index }} />
      <ProductWorkAmount props={{ work, index }} />
      <ProductWorkComment props={{ work, index }} />
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

export default memo(ProductWorkForm);

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
