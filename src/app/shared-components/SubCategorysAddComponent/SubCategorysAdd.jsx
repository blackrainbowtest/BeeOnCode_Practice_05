import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import ActionButtonComponent from "../ActionButtonComponent/ActionButtonComponent";
import TitleActionComponent from "../TitleActionComponent/TitleActionComponent";
import { truncateName } from "../../../utils/text";
import { useSelector } from "react-redux";

const PopupBody = styled("div")(
  ({ theme }) => `
        width: 350px;
        min-height: 160px;
        padding: 12px 20px;
        margin-top: 8px;
        border-radius: 5px;
        background: ${theme.palette.background.default};
        box-shadow: ${theme.palette.shadow.default};
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 1;
      `
);

function SubCategorysAdd({ close }) {
  const [categoryItem, setCategoryItem] = useState({});
  const category = useSelector((state) => state?.category?.data);
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const choosedCategory = useSelector((state) => state?.category?.category);
  const handleActionPopup = () => {
    // if (categoryName.trim() && categoryImage) {
    //   dispatch(
    //     addCategory({
    //       name: categoryName,
    //       image: categoryImage,
    //       gender: gender,
    //     })
    //   );
    // }
    close();
  };

  useEffect(() => {
    let categoryID = "-1";
    if (chooesedGender) {
      categoryID = choosedCategory.female;
    } else {
      categoryID = choosedCategory.male;
    }
    const currCategory = category.slice().filter((c) => c.id === categoryID)[0];
    console.log(currCategory?.name ? currCategory?.name : "no name");
    setCategoryItem(currCategory?.name ? currCategory?.name : "no name");
  }, [category, chooesedGender, choosedCategory.female, choosedCategory.male]);

  return (
    <PopupBody>
      <TitleActionComponent
        close={close}
        title={`${categoryItem}: Add subcategory`}
      />
      <ActionButtonComponent callback={handleActionPopup} label='Add' />
    </PopupBody>
  );
}

export default memo(SubCategorysAdd);
