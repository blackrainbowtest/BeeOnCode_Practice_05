import { memo } from "react";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent/ActionButtonComponent";
import Label from "./content/Label";
import { css } from "styled-components";

const ActionButtonStyle = ({ theme }) => css`
  min-height: 175px !important;
  min-width: 50px !important;
  border-radius: 0px 10px 10px 00px !important;
`;

function FilterProduct() {
  const handleFilterClck = (event) => {
    console.log(55);
  };
  return (
    <ActionButtonComponent
      callback={handleFilterClck}
      label={<Label />}
      customStyles={ActionButtonStyle}
    />
  );
}

export default memo(FilterProduct);
