import TextInputComponent from "app/shared-components/TextInputComponent";
import { workPriceChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductWorkPrice({ props }) {
  const { work, index } = props;
  const [isPriceError, setIsPriceError] = useState(false);
  const dispatch = useDispatch();

  const handlePriceChange = useCallback(
    (data) => {
      setIsPriceError(!/^\d*\.?\d*$/.test(data));
      dispatch(workPriceChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Price'
      value={work.price}
      callback={handlePriceChange}
      error={isPriceError}
      helperText='Not a number'
      adornment='$'
    />
  );
}

export default memo(ProductWorkPrice);
