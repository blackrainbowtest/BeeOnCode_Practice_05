import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";

function ProductWorkComment({ props }) {
  const { work, index, callback } = props;
  const handleCommentChange = (data) => {
    callback((prev) => ({
      ...prev,
      works: prev.works.map((st, ind) => {
        if (index === ind) {
          return {
            ...st,
            comment: data,
          };
        }
        return st;
      }),
    }));
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
