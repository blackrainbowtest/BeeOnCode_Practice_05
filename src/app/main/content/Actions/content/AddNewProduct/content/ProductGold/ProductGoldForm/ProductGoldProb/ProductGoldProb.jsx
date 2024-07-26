import { Box } from "@mui/material";
import ButtonProbComponent from "app/shared-components/ButtonProbComponent";
import { memo } from "react";
import styled, { css } from "styled-components";

function ProductGoldProb({ props }) {
  const { gold, index, callback } = props;
  console.log(gold)
  const handleProbChange = (event, data) => {
    callback((prev) => ({
      ...prev,
      golds: prev.golds.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            prob: data.prob,
            color: data.color,
          };
        }
        return st;
      }),
    }));
  };
  return (
    <AddNewContainer>
      <ButtonProbComponent
        label='585'
        callback={handleProbChange}
        prob={585}
        color={1}
        customStyles={GoldProbStyle}
        isActive={gold.color === 1 && gold.prob === 585}
      />
      <ButtonProbComponent
        label='585'
        callback={handleProbChange}
        prob={585}
        color={2}
        customStyles={GoldProbStyle}
        isActive={gold.color === 2 && gold.prob === 585}
      />
      <ButtonProbComponent
        label='585'
        callback={handleProbChange}
        prob={585}
        color={3}
        customStyles={GoldProbStyle}
        isActive={gold.color === 3 && gold.prob === 585}
      />
      <ButtonProbComponent
        label='750'
        callback={handleProbChange}
        prob={750}
        color={1}
        customStyles={GoldProbStyle}
        isActive={gold.color === 1 && gold.prob === 750}
      />
      <ButtonProbComponent
        label='750'
        callback={handleProbChange}
        prob={750}
        color={2}
        customStyles={GoldProbStyle}
        isActive={gold.color === 2 && gold.prob === 750}
      />
      <ButtonProbComponent
        label='750'
        callback={handleProbChange}
        prob={750}
        color={3}
        customStyles={GoldProbStyle}
        isActive={gold.color === 3 && gold.prob === 750}
      />
    </AddNewContainer>
  );
}

export default memo(ProductGoldProb);

const AddNewContainer = styled(Box)(() => ({
  minWidth: "50%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const GoldProbStyle = ({ theme }) => css`
  min-width: 50px !important;
  min-height: 24px !important;
  padding: 0px !important;
`;
