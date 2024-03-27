import React, { FC } from 'react';

import { SearchIcon } from '@/assets';
import { Image, SearchButton, SearchInput } from '@/components';

import { StyledSearchImageWrapper, StyledSearchSection } from './styled';

const SearchBar: FC<ISearchBar> = ({ placeholder }) => {
  return (
    <StyledSearchSection>
      <SearchInput placeholder={placeholder} />
      <SearchButton>
        <StyledSearchImageWrapper>
          <Image src={SearchIcon} />
        </StyledSearchImageWrapper>
      </SearchButton>
    </StyledSearchSection>
  );
};

export default SearchBar;
