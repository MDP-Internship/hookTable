import React from 'react'
import styled from 'styled-components';

const STooltip = styled.span`
  position: relative;
  display: inline-block;
  transition: all 1s;
  &:hover {
     &::before {
         content: '${props=>props.value}';
         position: absolute;
         padding: 5px;
         border-radius: 5px;
         background-color: lightgray;
         color: grey;
     }
  }


`;

export default function Tooltip({ children }) {
    return (
        <STooltip value={children}>
            {children}
        </STooltip>
    )
}
