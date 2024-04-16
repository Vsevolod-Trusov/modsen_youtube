import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { TEST_IDS } from '@/contants';
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
    <StyledToggleContainer test-id={TEST_IDS.TOGGLE_THEME_BUTTON_ID}>
      <StyledLabel>
        <StyledInput type='checkbox' className='input' onClick={handleToggle} />
        <StyledSpan className='slider' />
      </StyledLabel>
    </StyledToggleContainer>
  );
};
export default ToggleButton;
