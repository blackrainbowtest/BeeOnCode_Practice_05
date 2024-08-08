import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function DataWatchInfoComponent() {
  return <MainContainer>
    666
  </MainContainer>;
}

export default memo(DataWatchInfoComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  maxHeight: "580px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
