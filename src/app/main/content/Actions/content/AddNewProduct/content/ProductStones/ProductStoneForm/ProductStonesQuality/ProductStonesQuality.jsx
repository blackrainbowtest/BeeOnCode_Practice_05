import TextInputComponent from "app/shared-components/TextInputComponent";
import { stoneQualityChange } from "features/Product/ProductSlice";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

function ProductStonesQuality({ props }) {
  const { stone, index } = props;
  const dispatch = useDispatch();

  const handleQualityChange = useCallback(
    (data) => {
      dispatch(stoneQualityChange({ index, data }));
    },
    [dispatch, index]
  );
  
  return (
    <TextInputComponent
      label='Quality'
      value={stone.quality}
      callback={handleQualityChange}
    />
  );
}

export default memo(ProductStonesQuality);
