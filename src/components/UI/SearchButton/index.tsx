import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { TEST_IDS } from '@/contants';

import { StyledButton } from './styled';

const SearchButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, onClick: handler }) => {
  return (
    <StyledButton onClick={handler} test-id={TEST_IDS.SEARCH_BUTTON_ID}>
      {children}
    </StyledButton>
  );
};
export default SearchButton;
