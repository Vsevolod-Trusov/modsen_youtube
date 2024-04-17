import React, { FC } from 'react';

import {
  StyledCircle,
  StyledFirstLine,
  StyledImageSkeleton,
  StyledLoader,
  StyledSecondLine,
  StyledWrapper,
} from './styled';

const SkeletonLoader: FC = () => {
  return (
    <StyledLoader>
      <StyledWrapper>
        <StyledImageSkeleton />
        <StyledCircle />
        <StyledFirstLine />
        <StyledSecondLine />
      </StyledWrapper>
    </StyledLoader>
  );
};
export { SkeletonLoader };
