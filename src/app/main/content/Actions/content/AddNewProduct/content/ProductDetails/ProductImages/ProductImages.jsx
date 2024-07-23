import { Box } from "@mui/material";
import ImageCollectionComponent from "app/shared-components/ImageCollectionComponent";
import ImageUploadComponent from "app/shared-components/ImageUploadComponent";
import { memo } from "react";
import styled from "styled-components";

const MAX_IMAGES = 4;

function ProductImages({ props }) {
  const { productData, setProductData } = props;

  /**
   * add image to NewProduct Images array
   * @param {File} newImage
   */
  const handleAddNewImage = (newImage) => {
    if (productData.images.length < MAX_IMAGES) {
      setProductData((prev) => ({
        ...prev,
        images: [...prev.images, newImage],
      }));
    }
  };

  /**
   * remove image from NewProduct Images array
   * @param {Number} removedImageIndex
   */
  const handleRemoveImage = (removedImageIndex) => {
    if (productData.images.length) {
      setProductData((prev) => ({
        ...prev,
        images: prev.images.filter((_, index) => index !== removedImageIndex),
      }));
    }
  };

  return (
    <ImageContainer>
      <UploadContainer>
        <ImageUploadComponent
          callback={handleAddNewImage}
          disabled={productData.images.length >= MAX_IMAGES}
        />
      </UploadContainer>
      <CollectionContainer>
        <ImageCollectionComponent
          images={productData.images}
          callback={handleRemoveImage}
          count={MAX_IMAGES}
        />
      </CollectionContainer>
    </ImageContainer>
  );
}

export default memo(ProductImages);

const ImageContainer = styled(Box)(({ theme }) => ({
  minWidth: "200px",
  minHeight: "180px",
  boxShadow: `${theme.palette.shadow.default}`,
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  overflow: "hidden",
}));

const UploadContainer = styled("div")(() => ({
  minHeight: "120px",
}));

const CollectionContainer = styled("div")(() => ({
  minHeight: "34px",
}));
