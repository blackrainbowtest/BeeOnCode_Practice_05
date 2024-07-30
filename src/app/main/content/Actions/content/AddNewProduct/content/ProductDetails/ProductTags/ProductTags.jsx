import React, { memo } from "react";
import TagInputComponent from "app/shared-components/TagInputComponent";
import { useDispatch, useSelector } from "react-redux";
import { productDataTag } from "features/Product/ProductSlice";

function ProductTags() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.newData);

  const setProductDataTag = (tagArray) => {
    dispatch(productDataTag(tagArray));
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
