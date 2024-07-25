import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductStonesWeight({ props }) {
  const { stone, index, callback } = props;
  const [isWeightError, setIsWeightError] = useState(false);
  const handleWeightChange = (data) => {
    setIsWeightError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
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
      value={stone.weight}
      callback={handleWeightChange}
      error={isWeightError}
      helperText='Not a number'
      adornment='Mm'
    />
  );
}

export default memo(ProductStonesWeight);
