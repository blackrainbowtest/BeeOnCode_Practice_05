import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import WatchActionComponent from "./WatchActionComponent";
import WatchImageSliderComponent from "./WatchImageSliderComponent";
import WatchSmallImagesComponent from "./WatchSmallImagesComponent";

function DataWatchImageComponent() {
  return (
    <MainContainer>
      <WatchImageSliderComponent />
      <WatchSmallImagesComponent />
      <WatchActionComponent />
    </MainContainer>
  );
}

export default memo(DataWatchImageComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
