import TextInputComponent from 'app/shared-components/TextInputComponent';
import { memo, useState } from "react";

function ProductGoldStartWeight({ props }) {
  const { gold, index, callback } = props;
  const [isStartWeightError, setIsStartWeightError] = useState(false);
  const handleStartWeightChange = (data) => {
    setIsStartWeightError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      golds: prev.golds.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            startWeight: data,
          };
        }
        return st;
      }),
    }));
  };
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
