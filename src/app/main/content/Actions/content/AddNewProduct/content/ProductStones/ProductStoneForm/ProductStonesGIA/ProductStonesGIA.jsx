import { Box, css, Switch } from "@mui/material";
import { stoneGIAChange } from "features/Product/ProductSlice";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function ProductStonesGIA({ props }) {
  const { stone, index } = props;
  const dispatch = useDispatch();

  const handleGIAChange = useCallback(
    (event) => {
      dispatch(stoneGIAChange({ index, data: event.target.checked }));
    },
    [dispatch, index]
  );

  return (
    <ContentContainer>
      <CustomSwitch checked={stone.GIA} onChange={handleGIAChange} />
    </ContentContainer>
  );
}

export default memo(ProductStonesGIA);

const ContentContainer = styled(Box)(() =>
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
  })
);

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: "50px!important",
  height: "20px!important",
  padding: "0px!important",
  display: "flex",
  "& .MuiSwitch-switchBase": {
    minWidth: "28px!important",
    minHeight: "20px!important",
    borderRadius: "25px",
    padding: "0px!important",
    color: theme.palette.background.black,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: theme.palette.background.black,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.background.turnOn,
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: "25px",
    backgroundColor: theme.palette.background.turnOn,
    opacity: 1,
  },
  "& .MuiSwitch-thumb": {
    minWidth: "29px!important",
    height: "20px!important",
    boxSizing: "border-box",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::before": {
      content: '"GIA"',
      fontSize: "12px",
      color: "#fff",
    },
  },
}));
