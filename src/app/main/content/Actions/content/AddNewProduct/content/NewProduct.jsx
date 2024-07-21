import { Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import TitleActionComponent from "../../../../../../shared-components/TitleActionComponent/TitleActionComponent";
import ProductClassification from "./ProductClassification";
import { useSelector } from "react-redux";

const MainContainer = styled(Box)(
  ({ theme }) => `
    width: 860px;
    background: ${theme.palette.background.main}!important;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
);

function NewProduct({ handleClose }) {
  const category = useSelector((state) => state?.category?.data);
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const [gender, setGender] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  useEffect(() => {
    if (category.length === 0) {
      return;
    }

    const currentCategory = category.filter((c) => c.gender === gender);

    if (selectedCategory === -1) {
      const newCategory = currentCategory.length ? currentCategory[0].id : -1;
      setSelectedCategory(newCategory);
    }

    const currentSubCategory = subCategory.filter(
      (sb) => sb.parent === selectedCategory
    );

    if (currentSubCategory.length) {
      setSelectedSubCategory(currentSubCategory[0].id);
    }
  }, [category, gender, selectedCategory, subCategory]);

  return (
    <MainContainer>
      <TitleActionComponent close={handleClose} title={"Add product"} />
      {selectedSubCategory.length ? (
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
      ) : null}

      <div></div>
      <div></div>
    </MainContainer>
  );
}

export default memo(NewProduct);
