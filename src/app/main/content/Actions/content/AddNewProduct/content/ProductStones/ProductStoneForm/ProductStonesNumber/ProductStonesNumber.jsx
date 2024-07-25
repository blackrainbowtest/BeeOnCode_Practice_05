import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";

function ProductStonesNumber({ props }) {
  const { stone, index, callback } = props;

  const handleNumberChange = (data) => {
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            number: data,
          };
        }
        return st;
      }),
    }));
  };

  return (
    <TextInputComponent
      label='Number'
      value={stone.number}
      callback={handleNumberChange}
    />
  );
}

export default memo(ProductStonesNumber);
