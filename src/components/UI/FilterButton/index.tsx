import React, { FC, PropsWithChildren } from 'react';

import { StyledFilterButton } from './styled';

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <StyledFilterButton>{children}</StyledFilterButton>;
};
export default Button;
