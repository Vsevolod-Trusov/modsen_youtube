import React, { FC, PropsWithChildren } from 'react';

import { StyledMainContainer } from './styled';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default Main;
