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
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";

function ProductStoneForm({ stone, index, canDelete, addNew, callback }) {
  const handleRemoveStone = () => {
    callback((prev) => ({
      ...prev,
      stones:
        prev.stones.length > 1
          ? prev.stones.filter((_, ind) => ind !== index)
          : [...prev.stones],
    }));
  };
  const handleAddStone = () => {
    callback((prev) => ({
      ...prev,
      stones: [
        ...prev.stones,
        {
          type: "",
          count: "",
          diametr: "",
          weight: "",
          quality: "",
          price: "",
          GIA: false,
          number: "",
        },
      ],
    }));
  };

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
