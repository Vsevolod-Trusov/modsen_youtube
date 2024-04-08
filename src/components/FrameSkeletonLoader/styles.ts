import { styled } from 'styled-components';

import {
  StyledImageSkeleton,
  StyledLoader,
  StyledWrapper,
} from '@/components/SkeletonLoader/styles';

const StyledFrameLoader = styled(StyledLoader)({
  width: '100%',
  height: '100%',
  flexBasis: '100%',
  maxWidth: '100%',
  minWidth: '10%',
  minHeight: '10%',
});
const StyledFrameWrapper = styled(StyledWrapper)({
  width: '100%',
  height: '100%',
});
const StyledFrameImageSkeleton = styled(StyledImageSkeleton)({
  width: '100%',
  height: '100%',
});

const StyledContainer = styled('div')({
  width: '99%',
  height: '100%',
  display: 'flex',
});

export {
  StyledContainer,
  StyledFrameImageSkeleton,
  StyledFrameLoader,
  StyledFrameWrapper,
};
