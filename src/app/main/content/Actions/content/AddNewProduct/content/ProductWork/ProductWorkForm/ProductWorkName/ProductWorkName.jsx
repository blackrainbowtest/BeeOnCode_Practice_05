import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";

function ProductWorkName({ props }) {
  const { work, index, callback } = props;
  const handleNameChange = (data) => {
    callback((prev) => ({
      ...prev,
      works: prev.works.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            name: data,
          };
        }
        return st;
      }),
    }));
  };
  return (
    <TextInputComponent
      label='Name'
      value={work.name}
      callback={handleNameChange}
    />
  );
}

export default memo(ProductWorkName);
