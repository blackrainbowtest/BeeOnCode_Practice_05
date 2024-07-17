import { Box } from '@mui/material';
import { memo } from 'react';
import styled from 'styled-components';

const MainContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.palette.background.secondary}!important;
`;

function Data() {
    return(
        <MainContainer sx={{ flexGrow: 1 }}>DataComponent</MainContainer>
    )
}

export default memo(Data);