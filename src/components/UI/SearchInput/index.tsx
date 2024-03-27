import React, { FC, InputHTMLAttributes, PropsWithChildren } from 'react';

import { StyledInput } from './styled';

const SearchInput: FC<
  PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
> = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};
export default SearchInput;
