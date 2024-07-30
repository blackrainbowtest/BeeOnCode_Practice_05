import TextInputComponent from "app/shared-components/TextInputComponent";
import { stoneWeightChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductStonesWeight({ props }) {
  const { stone, index } = props;
  const [isWeightError, setIsWeightError] = useState(false);
  const dispatch = useDispatch();

  const handleWeightChange = useCallback(
    (data) => {
      setIsWeightError(!/^\d*\.?\d*$/.test(data));
      dispatch(stoneWeightChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Weight'
      value={stone.weight}
      callback={handleWeightChange}
      error={isWeightError}
      helperText='Not a number'
      adornment='Mm'
    />
  );
}

export default memo(ProductStonesWeight);
