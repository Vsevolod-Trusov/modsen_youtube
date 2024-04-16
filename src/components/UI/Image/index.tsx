import React, { FC, ImgHTMLAttributes } from 'react';

import { StyledImage } from './styled';

interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
  testId?: string;
}

const Image: FC<IImage> = ({ src, alt, testId }) => {
  return <StyledImage src={src} alt={alt} test-id={testId} />;
};

export default Image;
