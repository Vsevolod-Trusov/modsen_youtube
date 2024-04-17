import React, { FC, InputHTMLAttributes, PropsWithChildren } from 'react';

import { TEST_IDS } from '@/contants';

import { StyledInput } from './styled';

const SearchInput: FC<
  PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
> = ({ placeholder, value, onChange: handler }) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    onChange={handler}
    data-test-id={TEST_IDS.SEARCH_INPUT_ID}
  />
);

export default SearchInput;
