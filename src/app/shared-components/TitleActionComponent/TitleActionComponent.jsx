import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { memo } from "react";
import styled from "styled-components";

const ActionContent = styled(Box)(
  ({ theme }) => `
        width: 100%;
        min-width: inherit!important;
        min-height: 32px;
        color: ${theme.palette.primary.text}!important;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
      `
);

function TitleActionComponent({ close, title }) {
  const handleMouseDownAction = (event) => {
    event.preventDefault();
  };

  const handleClickAction = (event) => {
    event.stopPropagation();
    close();
  };

  return (
    <ActionContent>
      <div>{title}</div>
      <IconButton
        aria-label='close'
        onClick={handleClickAction}
        onMouseDown={handleMouseDownAction}
      >
        <CloseIcon />
      </IconButton>
    </ActionContent>
  );
}

export default memo(TitleActionComponent);
