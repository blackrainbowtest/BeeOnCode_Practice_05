import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductGoldPrice({ props }) {
  const { gold, index, callback } = props;
  const [isPriceError, setIsPriceError] = useState(false);
  const handlePriceChange = (data) => {
    setIsPriceError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      golds: prev.golds.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            price: data,
          };
        }
        return st;
      }),
    }));
  };
  return (
    <TextInputComponent
      label='Price'
      value={gold.price}
      callback={handlePriceChange}
      error={isPriceError}
      helperText='Not a number'
      adornment='$'
    />
  );
}

export default memo(ProductGoldPrice);
