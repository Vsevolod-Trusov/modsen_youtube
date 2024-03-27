import React from 'react';

import { StyledInput, StyledLabel, StyledSpan } from './styled';

const ToggleButton = () => {
  return (
    <StyledLabel>
      <StyledInput type='checkbox' className='input' />
      <StyledSpan className='slider'></StyledSpan>
    </StyledLabel>
  );
};
export default ToggleButton;
