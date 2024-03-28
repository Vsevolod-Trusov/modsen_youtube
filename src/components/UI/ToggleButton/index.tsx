import React from 'react';

import {
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledToggleContainer,
} from './styled';

const ToggleButton = () => {
  return (
    <StyledToggleContainer>
      <StyledLabel>
        <StyledInput type='checkbox' className='input' />
        <StyledSpan className='slider'></StyledSpan>
      </StyledLabel>
    </StyledToggleContainer>
  );
};
export default ToggleButton;
