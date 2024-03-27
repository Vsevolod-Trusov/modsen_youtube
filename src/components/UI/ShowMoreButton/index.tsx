import React, { FC, PropsWithChildren } from 'react';

import { StyledButton } from './styled';

const ShowMoreButton: FC<PropsWithChildren> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default ShowMoreButton;
