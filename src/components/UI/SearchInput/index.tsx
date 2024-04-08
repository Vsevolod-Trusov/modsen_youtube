import React, { FC, InputHTMLAttributes, PropsWithChildren } from 'react';

import { StyledInput } from './styled';

const SearchInput: FC<
  PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
> = ({ placeholder, value, onChange: handler }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={handler} />
  );
};
export default SearchInput;
