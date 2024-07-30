import { Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import TitleActionComponent from "app/shared-components/TitleActionComponent/TitleActionComponent";
import ProductClassification from "./ProductClassification";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductGold from "./ProductGold";
import ProductWork from "./ProductWork";
import ProductStones from "./ProductStones";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";
import { resetNewData } from "features/Product/ProductSlice";

function NewProduct({ handleClose }) {
  const category = useSelector((state) => state?.category?.data);
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const [gender, setGender] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const productData = useSelector((state) => state?.product?.newData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetNewData());

    if (category.length === 0) {
      return;
    }

    const currentSubCategory = subCategory.filter(
      (sb) => sb.parent === selectedCategory
    );

    if (currentSubCategory.length) {
      setSelectedSubCategory(currentSubCategory[0].id);
    } else {
      setSelectedSubCategory("");
    }
  }, [category, dispatch, selectedCategory, subCategory]);

  useEffect(() => {
    const currentCategory = category.filter((c) => c.gender === gender);
    const newCategory = currentCategory.length ? currentCategory[0].id : -1;
    setSelectedCategory(newCategory);
  }, [category, gender]);

  return (
    <MainContainer>
      {Object.keys(productData).length !== 0 ? (
        <>
          <TitleActionComponent close={handleClose} title={"Add product"} />
          <ProductClassification
            props={{
              gender,
              setGender,
              selectedCategory,
              setSelectedCategory,
              selectedSubCategory,
              setSelectedSubCategory,
            }}
          />
          <ProductDetails />
          <ContentContainer>
            <ProductGold />
            <ProductWork />
            <ProductStones />
            <ProductPrice />
          </ContentContainer>
          <ProductActions
            close={handleClose}
            props={{
              gender,
              selectedCategory,
              selectedSubCategory,
            }}
          />
        </>
      ) : null}
    </MainContainer>
  );
}

export default memo(NewProduct);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "860px",
  maxHeight: "800px",
  overflow: "auto",
  background: `${theme.palette.background.main}!important`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "30px",
  borderRadius: "5px",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
