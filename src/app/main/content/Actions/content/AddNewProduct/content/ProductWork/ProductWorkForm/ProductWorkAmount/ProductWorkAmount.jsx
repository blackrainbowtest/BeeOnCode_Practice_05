import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo, useState } from "react";

function ProductWorkAmount({ props }) {
  const { work, index, callback } = props;
  const [isAmountError, setIsAmountError] = useState(false);
  const handleAmountChange = (data) => {
    setIsAmountError(!/^\d*\.?\d*$/.test(data));
    callback((prev) => ({
      ...prev,
      works: prev.works.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            amount: data,
          };
        }
        return st;
      }),
    }));
  };
  return (
    <TextInputComponent
      label='Amount'
      value={work.amount}
      callback={handleAmountChange}
      error={isAmountError}
      helperText='Not a number'
      adornment='$'
    />
  );
}

export default memo(ProductWorkAmount);
