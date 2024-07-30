import styled, { css } from "styled-components";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { memo, useCallback } from "react";
import { Box } from "@mui/system";

function ProductActions() {
  const handleAddButtonClick = useCallback((event) => {
    console.log("Add");
  }, []);

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
        label='Add'
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
  background-color: transparent!important;
  color: ${theme.palette.text.grey}!important;
  border: 1px solid ${theme.palette.text.grey}!important;
`;

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
}));
