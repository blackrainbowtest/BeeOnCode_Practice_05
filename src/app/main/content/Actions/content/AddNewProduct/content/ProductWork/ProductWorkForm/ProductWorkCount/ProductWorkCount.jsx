import TextInputComponent from "app/shared-components/TextInputComponent";
import { workCountChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductWorkCount({ props }) {
  const { work, index } = props;
  const [isCountError, setIsCountError] = useState(false);
  const dispatch = useDispatch();

  const handleCountChange = useCallback(
    (data) => {
      setIsCountError(!/^\d*\.?\d*$/.test(data));
      dispatch(workCountChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Count'
      value={work.count}
      callback={handleCountChange}
      error={isCountError}
      helperText='Not a number'
    />
  );
}

export default memo(ProductWorkCount);
