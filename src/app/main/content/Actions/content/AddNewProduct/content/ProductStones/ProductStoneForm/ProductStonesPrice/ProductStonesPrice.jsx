import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductStonesPrice({ props }) {
  const { stone, index, callback } = props;
  const [isPriceError, setIsPriceError] = useState(false);

  const handlePriceChange = (data) => {
    setIsPriceError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
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
      value={stone.price}
      callback={handlePriceChange}
      error={isPriceError}
      helperText='Not a number'
      adornment='$'
    />
  );
}

export default memo(ProductStonesPrice);
