import { css } from "styled-components";
import { memo } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

import ActionButtonComponent from "app/shared-components/ActionButtonComponent";

function ProductStonesRemove({ props }) {
  const { index, callback } = props;
  const handleRemoveStone = () => {
    callback((prev) => ({
      ...prev,
      stones:
        prev.stones.length > 1
          ? prev.stones.filter((_, ind) => ind !== index)
          : [...prev.stones],
    }));
  };
  return (
    <ActionButtonComponent
      label={<RemoveIcon />}
      customStyles={ActionButtonStyle}
      callback={handleRemoveStone}
    />
  );
}

export default memo(ProductStonesRemove);

const ActionButtonStyle = ({ theme }) => css`
  min-width: 18px !important;
  min-height: 18px !important;
  padding: 0px !important;
  background-color: ${theme.palette.background.default}!important;
  color: ${theme.palette.text.primary}!important;
`;
