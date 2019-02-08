import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const SelectComponent = styled.select`
  padding: 10px;
  min-width: 360px;
  border-radius: 3px;
  ${space}
`;

export default function Select(props) {
  return (
   <SelectComponent {...props}>
    { 
      props.options.map(it => (
        <option value={it.value}>{it.label}</option>
      ))
    }
   </SelectComponent>
  );
}