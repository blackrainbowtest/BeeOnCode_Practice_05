import TextInputComponent from "app/shared-components/TextInputComponent";
import { workCommentChange } from "features/Product/ProductSlice";
import { memo } from "react";
import { useDispatch } from "react-redux";

function ProductWorkComment({ props }) {
  const { work, index } = props;
  const dispatch = useDispatch();

  const handleCommentChange = (data) => {
    dispatch(workCommentChange({ index, data }));
  };
  return (
    <TextInputComponent
      label='Comment'
      value={work.comment}
      callback={handleCommentChange}
    />
  );
}

export default memo(ProductWorkComment);
