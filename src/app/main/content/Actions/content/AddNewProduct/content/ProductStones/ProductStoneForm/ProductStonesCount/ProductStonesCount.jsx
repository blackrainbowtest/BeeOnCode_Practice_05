import TextInputComponent from "app/shared-components/TextInputComponent";
import { stoneCountChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductStonesCount({ props }) {
  const { stone, index } = props;
  const [isCountError, setIsCountError] = useState(false);
  const dispatch = useDispatch();

  const handleCountChange = useCallback(
    (data) => {
      setIsCountError(!/^\d*$/.test(data));
      dispatch(stoneCountChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Count'
      value={stone.count}
      callback={handleCountChange}
      error={isCountError}
      helperText='Not a number'
    />
  );
}

export default memo(ProductStonesCount);
