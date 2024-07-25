import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductStonesCount({ props }) {
  const { stone, index, callback } = props;
  const [isCountError, setIsCountError] = useState(false);
  const handleCountChange = (data) => {
    setIsCountError(!/^\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            count: data,
          };
        }
        return st;
      }),
    }));
  };
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
