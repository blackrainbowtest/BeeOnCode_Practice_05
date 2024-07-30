import TextInputComponent from "app/shared-components/TextInputComponent";
import { workNameChange } from "features/Product/ProductSlice";
import { memo } from "react";
import { useDispatch } from "react-redux";

function ProductWorkName({ props }) {
  const { work, index } = props;
  const dispatch = useDispatch();

  const handleNameChange = (data) => {
    dispatch(workNameChange({ index, data }));
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
