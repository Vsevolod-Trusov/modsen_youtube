import React, { FC } from 'react';

import {
  StyledContainer,
  StyledFrameImageSkeleton,
  StyledFrameLoader,
  StyledFrameWrapper,
} from './styles';

const FrameSkeletonLoader: FC = () => {
  return (
    <StyledContainer>
      <StyledFrameLoader>
        <StyledFrameWrapper>
          <StyledFrameImageSkeleton />
        </StyledFrameWrapper>
      </StyledFrameLoader>
    </StyledContainer>
  );
};
export default FrameSkeletonLoader;
