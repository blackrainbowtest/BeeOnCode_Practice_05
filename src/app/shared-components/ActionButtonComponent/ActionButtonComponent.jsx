import { Button } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

const ActionContent = styled(Button)(
  ({ theme }) => `
      min-width: inherit!important;
      min-height: 32px;
      padding: 12px 16px;
      border-radius: 25px!important;
      background: ${theme.palette.background.button}!important;
      color: ${theme.palette.common.white}!important;
      box-shadow: ${theme.palette.shadow.default}!important;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      font-size: 1.1rem;
      text-align: center;
      z-index: 1;
    `
);

function ActionButtonComponent({ callback, label = "Add" }) {
  const handleMouseDownAction = (event) => {
    event.preventDefault();
  };

  const handleClickAction = (event) => {
    event.stopPropagation();
    callback(event);
  };
  return (
    <ActionContent
      onClick={handleClickAction}
      onMouseDown={handleMouseDownAction}
    >
      { label }
    </ActionContent>
  );
}

export default memo(ActionButtonComponent);
