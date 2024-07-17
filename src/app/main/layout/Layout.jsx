import { memo } from "react";
import { Box } from "@mui/material";
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70px;
  position: fixed;
  background: ${(props) => props.theme.palette.background.default}!important;
`;

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <LayoutContainer>555</LayoutContainer>
    </Box>
  );
}

export default memo(Layout);
