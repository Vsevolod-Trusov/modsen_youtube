import React, { FC, ImgHTMLAttributes } from 'react';

import { StyledImage } from './styled';

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
