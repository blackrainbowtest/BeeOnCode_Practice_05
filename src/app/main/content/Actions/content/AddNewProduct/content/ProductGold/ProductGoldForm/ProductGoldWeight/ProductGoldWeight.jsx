import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductGoldWeight({ props }) {
  const { gold, index, callback } = props;
  const [isWeightError, setIsWeightError] = useState(false);
  const handleWeightChange = (data) => {
    setIsWeightError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      golds: prev.golds.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            weight: data,
          };
        }
        return st;
      }),
    }));
  };
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
