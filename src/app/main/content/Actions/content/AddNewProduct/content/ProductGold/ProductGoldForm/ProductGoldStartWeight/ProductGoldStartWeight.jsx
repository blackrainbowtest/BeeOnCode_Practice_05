import TextInputComponent from "app/shared-components/TextInputComponent";
import { changeStartWeight } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductGoldStartWeight({ props }) {
  const { gold, index } = props;
  const [isStartWeightError, setIsStartWeightError] = useState(false);
  const dispatch = useDispatch();

  const handleStartWeightChange = useCallback(
    (data) => {
      setIsStartWeightError(!/^\d*\.?\d*$/.test(data));
      dispatch(changeStartWeight({ index, data }));
    },
    [dispatch, index]
  );
  return (
    <TextInputComponent
      label='St. weight'
      value={gold.startWeight}
      callback={handleStartWeightChange}
      error={isStartWeightError}
      helperText='Not a number'
      adornment='Gr'
    />
  );
}

export default memo(ProductGoldStartWeight);
