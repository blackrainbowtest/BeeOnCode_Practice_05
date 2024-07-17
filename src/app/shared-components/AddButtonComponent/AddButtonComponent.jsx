import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { memo } from "react";
import styled from "styled-components";

const MainContainer = styled(Button)`
  width: 50px;
  min-height: inherit;
  padding: 0;
  background: ${(props) => props.theme.palette.background.default}!important;
  color: ${(props) => props.theme.palette.text.primary}!important;
  border: none !important;
  display: flex;
  align-items: center;
  gap: 20px;
`;

function AddButtonComponent({ callback }) {
  const handleClickAddButton = (event) => {
    event.stopPropagation();
    callback();
  };

  const handleMouseDownAddButton = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer
      variant='outlined'
      onClick={handleClickAddButton}
      onMouseDown={handleMouseDownAddButton}
    >
      <AddIcon />
    </MainContainer>
  );
}

export default memo(AddButtonComponent);
