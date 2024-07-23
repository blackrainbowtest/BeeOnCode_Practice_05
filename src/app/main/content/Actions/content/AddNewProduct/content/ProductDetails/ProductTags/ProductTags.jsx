import React, { memo } from "react";
import TagInputComponent from "app/shared-components/TagInputComponent";

function ProductTags({ props }) {
  const { productData, setProductData } = props;

  const setProductDataTag = (tagArray) => {
    setProductData((prev) => ({ ...prev, tags: tagArray }));
  };

  return (
    <TagInputComponent
      value={productData.tags}
      callback={setProductDataTag}
      id='tag-input'
      label='Enter tags'
    />
  );
}

export default memo(ProductTags);
