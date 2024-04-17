import React, { FC } from 'react';

import { ErrorBoundary } from '@/assets';
import { Image } from '@/components';

import { StyledContainer, StyledErrorMessage } from './styled';

const FallbackUI: FC = () => {
  return (
    <StyledContainer>
      <div>
        <Image src={ErrorBoundary} alt='tetx' />
      </div>
      <StyledErrorMessage>Something went wrong</StyledErrorMessage>
    </StyledContainer>
  );
};
export { FallbackUI };
