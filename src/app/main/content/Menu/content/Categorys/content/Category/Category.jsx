import { memo, useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CategoryComponent from "../../../../../../../shared-components/CategoryComponent";
import AddButtonComponent from "../../../../../../../shared-components/AddButtonComponent/AddButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../../../../../../../features/Category/CategorySlice";
import PopupComponent from '../../../../../../../shared-components/PopupComponent/PopupComponent';

const MainContainer = styled(Box)(
  ({theme}) => `
  width: 100%;
  min-height: 80px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  `
);

function Category() {
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const category = useSelector((state) => state?.category?.data);
  const choosedCategory = useSelector((state) => state?.category?.category);
  const dispatch = useDispatch();
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    const currentCategory = category.filter((c) => c.gender === chooesedGender);
    if (chooesedGender && choosedCategory.female === -1) {
      category.filter((c) => c.gender === chooesedGender);
      dispatch(
        changeCategory({
          ...choosedCategory,
          female: currentCategory.length ? currentCategory[0].id : -1,
        })
      );
    } else if (!chooesedGender && choosedCategory.male === -1) {
      dispatch(
        changeCategory({
          ...choosedCategory,
          male: currentCategory.length ? currentCategory[0].id : -1,
        })
      );
    }
  }, [choosedCategory, chooesedGender, category, dispatch]);

  const handleCallbackCategory = (data) => {
    if (chooesedGender) {
      dispatch(changeCategory({...choosedCategory, female: data}))
    } else {
      dispatch(changeCategory({...choosedCategory, male: data}))
    }
  };

  const handleAddCategory = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  return (
    <MainContainer>
      {category.map((c) => {
        return chooesedGender === c.gender ? (
          <CategoryComponent
            key={c.id}
            active={chooesedGender ? (
              choosedCategory.female === c.id
            ) : (
              choosedCategory.male === c.id
            )}
            item={c}
            callback={handleCallbackCategory}
          />
        ) : null;
      })}
      <AddButtonComponent id={id} callback={handleAddCategory} />
      <PopupComponent id={id} open={open} anchor={anchor} close={handleClosePopup} />
    </MainContainer>
  );
}

export default memo(Category);
