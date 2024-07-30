import TextInputComponent from "app/shared-components/TextInputComponent";
import { stoneDiametrChange } from "features/Product/ProductSlice";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function ProductStonesDiametr({ props }) {
  const { stone, index } = props;
  const [isDiametrError, setIsDiametrError] = useState(false);
  const dispatch = useDispatch();

  const handleDiametrChange = useCallback(
    (data) => {
      setIsDiametrError(!/^\d*$/.test(data));
      dispatch(stoneDiametrChange({ index, data }));
    },
    [dispatch, index]
  );

  return (
    <TextInputComponent
      label='Diametr'
      value={stone.diametr}
      callback={handleDiametrChange}
      error={isDiametrError}
      helperText='Not a number'
      adornment='Mm'
    />
  );
}

export default memo(ProductStonesDiametr);
