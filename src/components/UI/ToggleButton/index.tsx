import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { LOCALSTORAGE_NAMES, TEST_IDS } from '@/contants';
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
    localStorage.setItem(
      LOCALSTORAGE_NAMES.THEME,
      JSON.stringify({ current: !currentTheme }),
    );
    dispatch(toggleTheme(!currentTheme));
  };

  return (
    <StyledToggleContainer data-test-id={TEST_IDS.TOGGLE_THEME_BUTTON_ID}>
      <StyledLabel>
        <StyledInput
          type='checkbox'
          defaultChecked={currentTheme}
          className='input'
          onClick={handleToggle}
        />
        <StyledSpan className='slider' />
      </StyledLabel>
    </StyledToggleContainer>
  );
};
export default ToggleButton;
