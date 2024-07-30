import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { memo, useCallback, useState } from "react";
// import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled, { css } from "styled-components";
import KaratContent from "../KaratContent";
import PriceContent from "../PriceContent";
import ProductionPrice from "../ProductionPrice";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  resetFilter,
  setFiltredData,
} from "features/Filter/FilterSlice";

function MenuContent({ isopen }) {
  const filterData = useSelector((state) => state?.filter);
  const productData = useSelector((state) => state?.product);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [carat, setCarat] = useState(null);
  const [carat2, setCarat2] = useState(null);
  const [price, setPrice] = useState(null);
  const [price2, setPrice2] = useState(null);
  const [prodPrice, setprodPrice] = useState(null);
  const [prodPrice2, setprodPrice2] = useState(null);
  const dispatch = useDispatch();

  const handleFilterButtonClick = useCallback(() => {
    if (filterData.isFilter) {
      dispatch(resetFilter());
    } else {
      dispatch(changeFilter(true));
      const tempData = productData.data.filter((elm) => {
        const currentTime = elm.currentTime;
        const currentCarat = elm.stones.weight;
        const currentPrice = elm.price.price;
        const currentProdPrice = elm.price.productionPrice;

        const isAfterValue = value ? currentTime >= value.valueOf() : true;

        const isBeforeValue2 = value2 ? currentTime <= value2.valueOf() : true;

        const isAfterCarat = carat ? currentCarat <= carat : true;

        const isBeforeCarat = carat2 ? currentCarat <= carat2 : true;

        const isAfterPrice = price ? currentPrice <= price : true;

        const isBeforePrice = price2 ? currentPrice <= price2 : true;

        const isAfterProdPrice = prodPrice
          ? currentProdPrice <= prodPrice
          : true;

        const isBeforeProdPrice = prodPrice2
          ? currentProdPrice <= prodPrice2
          : true;

        return (
          isAfterValue &&
          isBeforeValue2 &&
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
  }, [carat, carat2, dispatch, filterData.isFilter, price, price2, prodPrice, prodPrice2, productData.data, value, value2]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ActionContent isopen={isopen.toString()}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePickerContainer>
            <DatePickerItem
              label='From'
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
            <DatePickerItem
              label='To'
              value={value2}
              onChange={(newValue) => setValue2(newValue)}
            />
          </DatePickerContainer>
        </LocalizationProvider>
        <KaratContent />
        <PriceContent />
        <ProductionPrice />
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
  fontSize: "14px", // Размер шрифта для ввода
  "& .MuiInputBase-root": {
    height: "100%",
  },
  "& .MuiFormLabel-root": {
    position: "absolute",
    top: "50%", // Позиция лейбла в середине по вертикали
    left: "5%", // Позиция лейбла по горизонтали
    fontSize: "12px", // Размер шрифта лейбла
    transform: "translateY(-50%)", // Центрирование по вертикали
    transition: "all 0.2s ease", // Плавный переход
  },
  "& .MuiInputLabel-shrink": {
    top: "-20%", // Позиция лейбла, когда он сдвинут вверх
    left: "12%",
    transform: "translateY(0)", // Отменить вертикальное смещение
    fontSize: "10px", // Размер шрифта для сжатого состояния
  },
  "& .MuiInputBase-input": {
    fontSize: "12px", // Размер шрифта
  },
}));
