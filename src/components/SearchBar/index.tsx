import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchIcon } from '@/assets';
import { Image, SearchButton, SearchInput } from '@/components';
import { EMPTY_STRING } from '@/contants';
import { setSearchValue } from '@/store/slices';

import { StyledSearchImageWrapper, StyledSearchSection } from './styled';

const SearchBar: FC<ISearchBar> = ({ placeholder }) => {
  const dispatch = useDispatch();
  const [searchValue, setValue] = useState<string>(EMPTY_STRING);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchValue(searchValue));
  };

  return (
    <StyledSearchSection>
      <SearchInput
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchValue}
      />
      <SearchButton onClick={handleSearch}>
        <StyledSearchImageWrapper>
          <Image src={SearchIcon} />
        </StyledSearchImageWrapper>
      </SearchButton>
    </StyledSearchSection>
  );
};

export { SearchBar };
