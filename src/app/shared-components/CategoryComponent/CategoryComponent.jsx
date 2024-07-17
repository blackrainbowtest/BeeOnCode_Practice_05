import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import noImage from "../../../images/noImage.jpg";

const MainContainer = styled(Box)`
  min-height: 80px;
  min-width: 140px;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.background.default}!important;
  color: ${(props) => props.theme.palette.common.black}!important;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    border: 2px solid
      ${(props) => props.theme.palette.secondary.button}!important;
  }
  & img {
    max-height: 50px;
  }
`;

function CategoryComponent({ item, active, callback }) {
  const truncateName = (name) => {
    if (name.length > 12) {
      return name.substring(0, 9) + "...";
    }
    return name;
  };

  const handleClickCategory = (event) => {
    event.stopPropagation()
    callback(item.id)
  };

  const handleMouseDownCategory = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer
      className={item.id === active ? "active" : ""}
      onClick={handleClickCategory}
      onMouseDown={handleMouseDownCategory}
    >
      <img src={item?.image ? item?.image : noImage} alt='' />
      <p>{item?.name ? truncateName(item.name) : "no name"}</p>
    </MainContainer>
  );
}

export default memo(CategoryComponent);
