import { Box } from '@mui/material';
import { memo } from 'react';
import styled from 'styled-components';

const MainContainer = styled(Box)`
  width: 100%;
  min-height: 40px;
  padding: 0px 30px;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  align-items: center;
`;

function SubCategorys() {
    return(
        <MainContainer>SubCategorysComponent</MainContainer>
    )
}

export default memo(SubCategorys);