import React, { FC, PropsWithChildren } from 'react';

import { StyledFooterContainer } from './styled';

const Footer: FC<PropsWithChildren> = ({ children }) => {
  return <StyledFooterContainer>{children}</StyledFooterContainer>;
};

export default Footer;
