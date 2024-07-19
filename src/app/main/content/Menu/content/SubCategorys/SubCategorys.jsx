import { Box, Tab, Tabs } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddButtonComponent from "../../../../../shared-components/AddButtonComponent/AddButtonComponent";
import PopupComponent from "../../../../../shared-components/PopupComponent/PopupComponent";
import SubCategorysAdd from "../../../../../shared-components/SubCategorysAddComponent";

const MainContainer = styled(Box)`
  width: 100%;
  min-height: 40px;
  padding: 0px 30px;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ButtonContainer = styled(Box)(
  ({ theme }) => `
  min-width: 45px;
  min-height: inherit;
  `
);

const CustomTabs = styled(Tabs)(
  ({ theme }) => `
  .MuiTabs-indicator {
    background-color: ${theme.palette.background.button}!important;
    min-height: 6px;
    border-radius: 25px;
  }
  .Mui-selected {
    color: ${theme.palette.background.button}!important;
  }
  .MuiTab-root {
    border-bottom: 6px solid white;
  }
  `
);

function SubCategorys() {
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const choosedCategory = useSelector((state) => state?.category?.category);
  const [filtredSubCategory, setFiltredSubCategory] = useState([]);
  const [value, setValue] = useState("");
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    const filtered = subCategory
      .slice()
      .filter(
        (c) =>
          c.parent ===
          (chooesedGender ? choosedCategory.female : choosedCategory.male)
      );
    setFiltredSubCategory(filtered);
    if (filtered.length) {
      setValue(filtered[0].id);
    }
  }, [subCategory, chooesedGender, choosedCategory]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

  const handleAddCategory = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchor(null);
  };

  return (
    <MainContainer>
      <CustomTabs
        value={value}
        onChange={handleChange}
        aria-label='sub categorys'
      >
        {filtredSubCategory.map((c) => {
          return (
            <Tab key={c.id} value={c.id} label={c?.name ? c.name : "no-name"} />
          );
        })}
      </CustomTabs>
      <ButtonContainer>
        <AddButtonComponent id={id} callback={handleAddCategory} />
      </ButtonContainer>
      <PopupComponent
        id={id}
        open={open}
        anchor={anchor}
        close={handleClosePopup}
      >
        <SubCategorysAdd close={handleClosePopup} />
      </PopupComponent>
    </MainContainer>
  );
}

export default memo(SubCategorys);
