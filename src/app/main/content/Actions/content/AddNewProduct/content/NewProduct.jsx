import { Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import TitleActionComponent from "app/shared-components/TitleActionComponent/TitleActionComponent";
import ProductClassification from "./ProductClassification";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductGold from "./ProductGold";
import ProductWork from "./ProductWork";
import ProductStones from "./ProductStones";
import ProductPrice from "./ProductPrice";
import ProductActions from './ProductActions';

function NewProduct({ handleClose }) {
  const category = useSelector((state) => state?.category?.data);
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const [gender, setGender] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [productData, setProductData] = useState({
    article: "",
    tags: [],
    images: [],
    gold: [],
    price: {
      productionPrice: "",
      price: "",
    }
  });

  useEffect(() => {
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
  }, [category, selectedCategory, subCategory]);

  useEffect(() => {
    const currentCategory = category.filter((c) => c.gender === gender);
    const newCategory = currentCategory.length ? currentCategory[0].id : -1;
    setSelectedCategory(newCategory);
  }, [category, gender]);

  return (
    <MainContainer>
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
      <ProductDetails props={{ productData, setProductData }} />
      <ContentContainer>
        <ProductGold props={{ productData, setProductData }} />
        <ProductWork props={{ productData, setProductData }} />
        <ProductStones props={{ productData, setProductData }} />
        <ProductPrice props={{ productData, setProductData }} />
      </ContentContainer>
      <ProductActions />
    </MainContainer>
  );
}

export default memo(NewProduct);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "860px",
  background: `${theme.palette.background.main}!important`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "30px",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
