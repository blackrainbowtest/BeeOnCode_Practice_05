import { Box } from "@mui/material";
import { memo, useState } from "react";
import styled from "styled-components";
import WatchActionComponent from "./WatchActionComponent";
import WatchImageSliderComponent from "./WatchImageSliderComponent";
import WatchSmallImagesComponent from "./WatchSmallImagesComponent";

function DataWatchImageComponent({ data }) {
  const [images, setImages] = useState(data.images);
  console.log(data);
  console.log(images);
  return (
    <MainContainer>
      <WatchImageSliderComponent images={images} />
      <WatchSmallImagesComponent sx={{ flexGrow: 1 }} />
      <WatchActionComponent canSell={!!data.id} />
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
