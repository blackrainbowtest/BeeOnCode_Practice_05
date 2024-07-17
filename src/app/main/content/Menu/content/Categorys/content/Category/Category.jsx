import { memo, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import logo from "../../../../../../../../logo.svg";
import CategoryComponent from "../../../../../../../shared-components/CategoryComponent";
import AddButtonComponent from '../../../../../../../shared-components/AddButtonComponent/AddButtonComponent';

const MainContainer = styled(Box)`
  width: 100%;
  min-height: 80px;
  padding: 0px 30px;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const category = [
  { id: 1, name: "cat1", gender: true, image: logo },
  { id: 2, name: "cat2", gender: true, image: logo },
  { id: 3, name: "cat345678912354565", gender: true, image: logo },
  { id: 4, gender: true },
];

function Category() {
  const [isActive, setIsActive] = useState(category[0]?.id);

  const handleCallbackCategory = (data) => {
    setIsActive(data);
  };

  const handleAddCategory = () => {
    console.log('Open window to add new Category');
  }

  return (
    <MainContainer>
      {category.map((c) => {
        return (
          <CategoryComponent
            key={c.id}
            active={isActive}
            item={c}
            callback={handleCallbackCategory}
          />
        );
      })}
      <AddButtonComponent callback={handleAddCategory} />
    </MainContainer>
  );
}

export default memo(Category);
