import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Data from "./Data";
import Filter from "./Filter";

const MainContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  flex-direction: column;
`;

function Content() {
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <Menu />
      <Data />
      <Filter />
    </MainContainer>
  );
}

export default memo(Content);
