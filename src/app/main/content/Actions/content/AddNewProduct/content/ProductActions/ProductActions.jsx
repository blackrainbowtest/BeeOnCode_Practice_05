import styled, { css } from "styled-components";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { memo, useCallback } from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { resetNewData } from "features/Product/ProductSlice";
import { addProduct, patchProduct } from "features/Product/ProductAPI";
import { getCurrentFullUnixTime } from "utils/validation";

function ProductActions({ close, props }) {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.newData);
  const user = useSelector((state) => state?.user?.user);

  const handleAddButtonClick = useCallback(
    (event) => {
      const currentTime = getCurrentFullUnixTime();

      if (!productData.id) {
        dispatch(
          addProduct({
            productData,
            userId: user.id,
            currentTime,
            gender: props.gender,
            category: props.selectedCategory,
            subcategory: props.selectedSubCategory,
          })
        );
      } else {
        // FIXME: add patch reduces
        dispatch(
          patchProduct({
            productData,
            userId: user.id,
            currentTime,
            gender: props.gender,
            category: props.selectedCategory,
            subcategory: props.selectedSubCategory,
          })
        );
      }
      dispatch(resetNewData());
      close();
    },
    [
      close,
      dispatch,
      productData,
      props.gender,
      props.selectedCategory,
      props.selectedSubCategory,
      user.id,
    ]
  );

  const handleWatchButtonClick = useCallback((event) => {
    console.log("Watch");
  }, []);

  return (
    <MainContainer>
      <ActionButtonComponent
        label='Watch'
        customStyles={WatchButtonStyle}
        callback={handleWatchButtonClick}
      />
      <ActionButtonComponent
        label={productData.id ? "Save" : "Add"}
        customStyles={ActionButtonStyle}
        callback={handleAddButtonClick}
      />
    </MainContainer>
  );
}

export default memo(ProductActions);

const ActionButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
`;

const WatchButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
  background-color: transparent !important;
  color: ${theme.palette.text.grey}!important;
  border: 1px solid ${theme.palette.text.grey}!important;
`;

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
}));
