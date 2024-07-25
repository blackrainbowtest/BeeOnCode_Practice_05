import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";

function ProductStonesQuality({ props }) {
  const { stone, index, callback } = props;

  const handleQualityChange = (data) => {
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            quality: data,
          };
        }
        return st;
      }),
    }));
  };
  return (
    <TextInputComponent
      label='Quality'
      value={stone.quality}
      callback={handleQualityChange}
    />
  );
}

export default memo(ProductStonesQuality);
