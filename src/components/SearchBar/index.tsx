import React, { FC } from 'react';

import { SearchIcon } from '@/assets';
import { Image, SearchButton, SearchInput } from '@/components';

import { StyledSearchSection } from './styled';

const SearchBar: FC<ISearchBar> = ({ placeholder }) => {
  return (
    <StyledSearchSection>
      <SearchInput placeholder={placeholder} />
      <SearchButton>
        <Image src={SearchIcon} />
      </SearchButton>
    </StyledSearchSection>
  );
};

export default SearchBar;
