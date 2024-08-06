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
import { FormProvider, useForm } from "react-hook-form";

function NewProduct({ handleClose }) {
  const category = useSelector((state) => state?.category?.data);
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const [gender, setGender] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const productData = useSelector((state) => state?.product?.newData);

  const methods = useForm({
    defaultValues: {
      article: "",
      tags: [],
      images: [],
      golds: [{ startWeight: "", weight: "", price: "", color: "", prob: "" }],
      price: { productionPrice: "", price: "" },
      stones: [
        {
          type: "",
          count: "",
          diametr: "",
          weight: "",
          quality: "",
          price: "",
          GIA: false,
          number: "",
        },
      ],
      works: [{ name: "", count: "", price: "", amount: "", comment: "" }],
    },
    mode: "onChange", // или 'onBlur' в зависимости от ваших предпочтений
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!productData.id) {
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
    } else {
      setGender(productData.gender);
      setSelectedCategory(productData.category);
      setSelectedSubCategory(productData.subcategory);
    }
  }, [
    category,
    dispatch,
    productData.category,
    productData.gender,
    productData.id,
    productData.subcategory,
    selectedCategory,
    subCategory,
  ]);

  useEffect(() => {
    const currentCategory = category.filter((c) => c.gender === gender);
    const newCategory = currentCategory.length ? currentCategory[0].id : -1;
    setSelectedCategory(newCategory);
  }, [category, gender]);

  return (
    <FormProvider {...methods}>
      <MainContainer>
        <TitleActionComponent
          close={handleClose}
          title={productData.id ? "Edit product" : "Add product"}
        />
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
        <ContentContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductDetails />
          
          <ProductStones />
          <ProductPrice />
          <button type='submit'>Submit</button>
        </ContentContainer>
      </MainContainer>
    </FormProvider>
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
  borderRadius: "5px"
}));

const ContentContainer = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// {/* <form onSubmit={methods.handleSubmit(onSubmit)}>
//   <ProductDetails />
//   {/*
//           <ContentContainer>
//             <ProductGold />
//             <ProductWork />
//             
//             
//           </ContentContainer>
//           <ProductActions
//             close={handleClose}
//             props={{
//               gender,
//               selectedCategory,
//               selectedSubCategory,
//             }}
//           /> */}
//   <button type='submit'>Submit</button>
// </form>; */}
