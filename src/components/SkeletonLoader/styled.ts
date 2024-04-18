import { styled } from 'styled-components';

import { DISPLAY_FLEX } from '@/constants';

const StyledLoader = styled('div')(({ theme }) => ({
  position: 'relative',
  marginBottom: '10px',
  ...DISPLAY_FLEX,
  flexBasis: '25%',
  maxWidth: '332px',
  padding: '20px 12px',

  width: '320px',
  height: '600px',

  minWidth: '219px',
  minHeight: '200px',

  backgroundColor: theme.darkThemeBackground || theme.lightGray,
  overflow: 'hidden',
  '&::after': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: `linear-gradient(110deg, rgba(${theme.skeletonAnimationBackground}, 0) 0%, rgba(${theme.skeletonAnimationBackground}, 0) 40%, rgba(${theme.skeletonAnimationBackground}, 0.5) 50%, rgba(${theme.skeletonAnimationBackground}, 0) 60%, rgba(${theme.skeletonAnimationBackground}, 0) 100%)`,
    animation: 'skeleton_animation 1.2s linear infinite',
  },
}));

const StyledWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',

  '&>div': {
    backgroundColor: '#cacaca',
  },
});

const StyledCircle = styled('div')({
  marginTop: '10px',
  width: '50px',
  height: '50px',
  borderRadius: '70%',
});

const StyledImageSkeleton = styled('div')({
  display: 'flex',
  width: '100%',
  height: '80%',
});

const StyledFirstLine = styled('div')({
  position: 'absolute',
  top: '85%',
  left: '58px',
  height: '10px',
  width: '40%',
});

const StyledSecondLine = styled('div')({
  position: 'absolute',
  top: '89%',
  left: '58px',
  height: '10px',
  width: '50%',
});

export {
  StyledCircle,
  StyledFirstLine,
  StyledImageSkeleton,
  StyledLoader,
  StyledSecondLine,
  StyledWrapper,
};
