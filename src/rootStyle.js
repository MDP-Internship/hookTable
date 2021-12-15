// import React from 'react';
import reset from 'styled-reset'
import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${reset}
 * {
     padding: 0;
 }
`;

export const Center = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
`;

