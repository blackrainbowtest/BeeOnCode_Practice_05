import { Box } from "@mui/material";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import { memo } from "react";
import styled, { css } from "styled-components";
import ProductGoldProb from "./ProductGoldProb";
import ProductGoldStartWeight from "./ProductGoldStartWeight";
import ProductGoldWeight from "./ProductGoldWeight";
import ProductGoldPrice from "./ProductGoldPrice";
// startWeight: "",
// weight: "",
// price: "",
// color: "",
// prob: "",
function ProductGoldForm({ gold, index, canDelete, addNew, callback }) {
  const handleRemoveWork = () => {
    callback((prev) => ({
      ...prev,
      golds:
        prev.golds.length > 1
          ? prev.golds.filter((_, ind) => ind !== index)
          : [...prev.golds],
    }));
  };
  const handleAddWork = () => {
    callback((prev) => ({
      ...prev,
      golds: [
        ...prev.golds,
        {
          name: "",
          count: "",
          price: "",
          amount: "",
          comment: "",
        },
      ],
    }));
  };
  return (
    <ContentContainer>
      <ProductGoldProb props={{ gold, index, callback }} />
      <ProductGoldStartWeight props={{ gold, index, callback }} />
      <ProductGoldWeight props={{ gold, index, callback }} />
      <ProductGoldPrice props={{ gold, index, callback }} />
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
