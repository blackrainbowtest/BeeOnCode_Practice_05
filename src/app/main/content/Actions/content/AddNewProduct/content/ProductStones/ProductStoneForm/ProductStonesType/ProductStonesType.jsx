import TextInputComponent from 'app/shared-components/TextInputComponent';
import { memo } from "react";

function ProductStoneType({ props }) {
  const { stone, index, callback } = props;
  const handleTypeChange = (data) => {
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            type: data,
          };
        }
        return st;
      }),
    }));
  };

  return (
    <TextInputComponent
      label='Type'
      value={stone.type}
      callback={handleTypeChange}
    />
  );
}

export default memo(ProductStoneType);
