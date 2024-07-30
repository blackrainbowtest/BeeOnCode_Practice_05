import { memo } from "react";
import TextInputComponent from "app/shared-components/TextInputComponent/TextInputComponent";
import { useDispatch, useSelector } from "react-redux";
import { productArticle } from "features/Product/ProductSlice";

function ProductArticle() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.newData);

  const handleProductArticle = (data) => {
    dispatch(productArticle(data));
  };

  return (
    <TextInputComponent
      label='Article'
      value={productData?.article}
      callback={handleProductArticle}
    />
  );
}

export default memo(ProductArticle);
