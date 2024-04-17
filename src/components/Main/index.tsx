import React, { FC, PropsWithChildren } from 'react';

import { StyledMainContainer } from './styled';

const Main: FC<PropsWithChildren> = ({ children }) => (
  <StyledMainContainer>{children}</StyledMainContainer>
);
export { Main };
