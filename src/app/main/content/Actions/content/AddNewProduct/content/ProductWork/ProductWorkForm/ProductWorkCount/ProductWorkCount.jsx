import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductWorkCount({ props }) {
  const { work, index, callback } = props;
  const [isCountError, setIsCountError] = useState(false);
  const handleCountChange = (data) => {
    setIsCountError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      works: prev.works.map((st, ind) => {
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
      value={work.count}
      callback={handleCountChange}
      error={isCountError}
      helperText='Not a number'
    />
  );
}

export default memo(ProductWorkCount);
