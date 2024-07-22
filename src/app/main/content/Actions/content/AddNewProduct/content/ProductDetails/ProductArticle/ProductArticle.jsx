import { memo } from "react";
import TextInputComponent from "../../../../../../../../shared-components/TextInputComponent/TextInputComponent";

function ProductArticle({ props }) {
  const { productData, setProductData } = props;
  const handleProductArticle = (data) => {
    setProductData((prev) => ({ ...prev, article: data }));
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
