import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { StyledButton } from './styled';

const SearchButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, onClick: handler }) => {
  return <StyledButton onClick={handler}>{children}</StyledButton>;
};
export default SearchButton;
