import React, { FC, PropsWithChildren } from 'react';

import { StyledButton } from './styled';

const SearchButton: FC<PropsWithChildren> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default SearchButton;
