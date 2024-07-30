import TextInputComponent from "app/shared-components/TextInputComponent";
import { stoneTypeChange } from "features/Product/ProductSlice";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

function ProductStoneType({ props }) {
  const { stone, index } = props;
  const dispatch = useDispatch();

  const handleTypeChange = useCallback(
    (data) => {
      dispatch(stoneTypeChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Type'
      value={stone.type}
      callback={handleTypeChange}
    />
  );
}

export default memo(ProductStoneType);
