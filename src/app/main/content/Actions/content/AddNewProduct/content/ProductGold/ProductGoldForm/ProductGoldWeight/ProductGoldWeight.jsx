import TextInputComponent from "app/shared-components/TextInputComponent";
import { changeWeight } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductGoldWeight({ props }) {
  const { gold, index } = props;
  const [isWeightError, setIsWeightError] = useState(false);
  const dispatch = useDispatch();

  const handleWeightChange = useCallback(
    (data) => {
      setIsWeightError(!/^\d*\.?\d*$/.test(data));
      dispatch(changeWeight({ index, data }));
    },
    [dispatch, index]
  );
  
  return (
    <TextInputComponent
      label='Weight'
      value={gold.weight}
      callback={handleWeightChange}
      error={isWeightError}
      helperText='Not a number'
      adornment='Gr'
    />
  );
}

export default memo(ProductGoldWeight);
