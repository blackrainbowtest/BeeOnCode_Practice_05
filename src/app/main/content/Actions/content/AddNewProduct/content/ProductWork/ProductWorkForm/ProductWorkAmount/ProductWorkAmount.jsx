import TextInputComponent from "app/shared-components/TextInputComponent";
import { workAmountChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductWorkAmount({ props }) {
  const { work, index } = props;
  const [isAmountError, setIsAmountError] = useState(false);
  const dispatch = useDispatch();

  const handleAmountChange = useCallback(
    (data) => {
      setIsAmountError(!/^\d*\.?\d*$/.test(data));
      dispatch(workAmountChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Amount'
      value={work.amount}
      callback={handleAmountChange}
      error={isAmountError}
      helperText='Not a number'
      adornment='$'
    />
  );
}

export default memo(ProductWorkAmount);
