import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks';
import { getCurrentThemeValue, toggleTheme } from '@/store/slices';

import {
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledToggleContainer,
} from './styled';

const ToggleButton: FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useTypedSelector(getCurrentThemeValue);

  const handleToggle = () => {
    dispatch(toggleTheme(!currentTheme));
  };

  return (
    <StyledToggleContainer>
      <StyledLabel>
        <StyledInput type='checkbox' className='input' onClick={handleToggle} />
        <StyledSpan className='slider' />
      </StyledLabel>
    </StyledToggleContainer>
  );
};
export default ToggleButton;
