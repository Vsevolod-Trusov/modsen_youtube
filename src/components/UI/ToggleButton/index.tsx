import React, { FC } from 'react';

import {
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledToggleContainer,
} from './styled';

const ToggleButton: FC = () => {
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
