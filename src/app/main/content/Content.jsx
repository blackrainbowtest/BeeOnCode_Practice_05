import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Data from "./Data";
import Actions from "./Actions/Actions";

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: `${theme.palette.background.main}!important`,
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

function Content() {
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <Menu />
      <Data />
      <Actions />
    </MainContainer>
  );
}

export default memo(Content);
