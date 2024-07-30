import TextInputComponent from "app/shared-components/TextInputComponent";
import { stonePriceChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductStonesPrice({ props }) {
  const { stone, index } = props;
  const [isPriceError, setIsPriceError] = useState(false);
  const dispatch = useDispatch();

  const handlePriceChange = useCallback(
    (data) => {
      setIsPriceError(!/^\d*\.?\d*$/.test(data));
      dispatch(stonePriceChange({ index, data }));
    },
    [dispatch, index]
  );
  
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
