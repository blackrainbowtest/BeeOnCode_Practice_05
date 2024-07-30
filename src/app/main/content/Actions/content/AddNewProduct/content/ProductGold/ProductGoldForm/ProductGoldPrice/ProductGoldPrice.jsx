import TextInputComponent from "app/shared-components/TextInputComponent";
import { changeGoldDrice } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductGoldPrice({ props }) {
  const { gold, index } = props;
  const [isPriceError, setIsPriceError] = useState(false);
  const dispatch = useDispatch();

  const handlePriceChange = useCallback(
    (data) => {
      setIsPriceError(!/^\d*\.?\d*$/.test(data));
      dispatch(changeGoldDrice({ index, data }));
    },
    [dispatch, index]
  );
  
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
