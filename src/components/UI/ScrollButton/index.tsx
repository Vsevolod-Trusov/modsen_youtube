import React, { FC, PropsWithChildren } from 'react';

import { StyledButton } from './styled';

const ScrollButton: FC<PropsWithChildren> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default ScrollButton;
