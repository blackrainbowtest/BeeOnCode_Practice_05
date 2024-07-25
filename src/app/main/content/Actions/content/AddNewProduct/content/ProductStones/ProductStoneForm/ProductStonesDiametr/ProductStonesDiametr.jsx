import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductStonesDiametr({ props }) {
  const { stone, index, callback } = props;
  const [isDiametrError, setIsDiametrError] = useState(false);
  const handleDiametrChange = (data) => {
    setIsDiametrError(!/^\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      stones: prev.stones.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            diametr: data,
          };
        }
        return st;
      }),
    }));
  };

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
