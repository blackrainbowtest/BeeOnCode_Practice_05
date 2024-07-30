import TextInputComponent from "app/shared-components/TextInputComponent";
import { stoneNumberChange } from "features/Product/ProductSlice";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

function ProductStonesNumber({ props }) {
  const { stone, index } = props;
  const dispatch = useDispatch();

  const handleNumberChange = useCallback(
    (data) => {
      dispatch(stoneNumberChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Number'
      value={stone.number}
      callback={handleNumberChange}
    />
  );
}

export default memo(ProductStonesNumber);
