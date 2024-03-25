import React, { FC, PropsWithChildren } from 'react';

import { StyledHeaderContainer } from './styled';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <StyledHeaderContainer>{children}</StyledHeaderContainer>;
};

export default Header;
