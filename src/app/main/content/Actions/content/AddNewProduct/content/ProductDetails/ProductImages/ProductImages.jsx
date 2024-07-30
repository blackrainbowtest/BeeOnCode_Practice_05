import { Box } from "@mui/material";
import ImageCollectionComponent from "app/shared-components/ImageCollectionComponent";
import ImageUploadComponent from "app/shared-components/ImageUploadComponent";
import { addNewImage, removeImage } from "features/Product/ProductSlice";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MAX_IMAGES = 4;

function ProductImages() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.newData);

  /**
   * add image to NewProduct Images array
   * @param {File} newImage
   */
  const handleAddNewImage = useCallback(
    (newImage) => {
      if (productData?.images && productData.images.length < MAX_IMAGES) {
        dispatch(addNewImage(newImage));
      }
    },
    [dispatch, productData.images]
  );

  /**
   * remove image from NewProduct Images array
   * @param {Number} removedImageIndex
   */
  const handleRemoveImage = useCallback(
    (removedImageIndex) => {
      if (productData.images.length) {
        dispatch(removeImage(removedImageIndex));
      }
    },
    [dispatch, productData.images]
  );

  return (
    <ImageContainer>
      <UploadContainer>
        <ImageUploadComponent
          callback={handleAddNewImage}
          disabled={
            productData?.images && productData?.images?.length >= MAX_IMAGES
          }
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
