import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { memo, useCallback, useState } from "react";
// import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled, { css } from "styled-components";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  resetFilter,
  setFiltredData,
} from "features/Filter/FilterSlice";
import SliderComponent from "app/shared-components/SliderComponent";

function MenuContent({ isopen }) {
  const filterData = useSelector((state) => state?.filter);
  const productData = useSelector((state) => state?.product);

  const [value, setValue] = useState([null, null]);
  const [weight, setWeight] = useState([0, 1000]);
  const [carat, setCarat] = useState([0, 1000]);
  const [price, setPrice] = useState([0, 100000]);
  const [prodPrice, setprodPrice] = useState([0, 100000]);
  const dispatch = useDispatch();

  const handleFilterButtonClick = useCallback(() => {
    if (filterData.isFilter) {
      dispatch(resetFilter());
    } else {
      dispatch(changeFilter(true));
      const tempData = productData.data.filter((elm) => {
        const currentTime = elm.currentTime;
        const currentWeight = elm.golds.reduce(
          (sum, stone) => sum + stone.weight,
          0
        );
        const currentCarat = elm.stones.reduce(
          (sum, stone) => sum + stone.weight,
          0
        );
        const currentPrice = elm.price.price;
        const currentProdPrice = elm.price.productionPrice;

        const isAfterValue = value[0]
          ? currentTime >= value[0].valueOf()
          : true;
        const isBeforeValue2 = value[1]
          ? currentTime <= value[1].valueOf()
          : true;

        const isAfterWeight = weight[0] ? currentWeight >= weight[0] : true;
        const isBeforeWeight = weight[1] ? currentWeight <= weight[1] : true;

        const isAfterCarat = carat[0] ? currentCarat >= carat[0] : true;
        const isBeforeCarat = carat[1] ? currentCarat <= carat[1] : true;

        const isAfterPrice = price[0] ? currentPrice >= price[0] : true;
        const isBeforePrice = price[1] ? currentPrice <= price[1] : true;

        const isAfterProdPrice = prodPrice[0]
          ? currentProdPrice >= prodPrice[0]
          : true;

        const isBeforeProdPrice = prodPrice[1]
          ? currentProdPrice <= prodPrice[1]
          : true;

        return (
          isAfterValue &&
          isBeforeValue2 &&
          isAfterWeight &&
          isBeforeWeight &&
          isAfterCarat &&
          isBeforeCarat &&
          isAfterPrice &&
          isBeforePrice &&
          isAfterProdPrice &&
          isBeforeProdPrice
        );
      });
      dispatch(setFiltredData(tempData));
    }
  }, [
    carat,
    dispatch,
    filterData.isFilter,
    price,
    prodPrice,
    productData.data,
    value,
    weight,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ActionContent isopen={isopen.toString()}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerContainer>
            <DatePickerItem
              label='From'
              value={value[0]}
              onChange={(newValue) => setValue((prev) => [newValue, prev[1]])}
            />
            <DatePickerItem
              label='To'
              value={value[1]}
              onChange={(newValue) => setValue((prev) => [prev[0], newValue])}
            />
          </DatePickerContainer>
        </LocalizationProvider>

        <SliderComponent
          value={weight}
          setValue={setWeight}
          min={0}
          max={1000}
          adornment='gr'
          title='Gold weight'
        />
        <SliderComponent
          value={carat}
          setValue={setCarat}
          min={0}
          max={1000}
          title='Carat'
        />
        <SliderComponent
          value={price}
          setValue={setPrice}
          min={0}
          max={100000}
          title='Price'
        />
        <SliderComponent
          value={prodPrice}
          setValue={setprodPrice}
          min={0}
          max={100000}
          title='Production price'
        />

        <ActionButtonComponent
          label={`${filterData.isFilter ? "Clear" : "Add"}`}
          customStyles={ActionButtonStyle}
          callback={handleFilterButtonClick}
        />
      </ActionContent>
    </LocalizationProvider>
  );
}

export default memo(MenuContent);

const ActionButtonStyle = ({ theme }) => css`
  min-width: 100% !important;
  min-height: 32px !important;
`;

const ActionContent = styled(Box)(({ theme }) => ({
  minWidth: "350px !important",
  minHeight: "300px",
  padding: "12px 16px",
  zIndex: "1",
}));

const DatePickerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
}));

const DatePickerItem = styled(DatePicker)(() => ({
  width: "140px",
  height: "30px",
  fontSize: "14px",
  "& .MuiInputBase-root": {
    height: "100%",
  },
  "& .MuiFormLabel-root": {
    position: "absolute",
    top: "50%",
    left: "5%",
    fontSize: "12px",
    transform: "translateY(-50%)",
    transition: "all 0.2s ease",
  },
  "& .MuiInputLabel-shrink": {
    top: "-20%",
    left: "12%",
    transform: "translateY(0)",
    fontSize: "10px",
  },
  "& .MuiInputBase-input": {
    fontSize: "12px",
  },
}));
