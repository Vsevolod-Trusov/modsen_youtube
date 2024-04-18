import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchIcon } from '@/assets';
import { Image, SearchButton, SearchInput } from '@/components';
import { EMPTY_STRING, KEY_CODES } from '@/contants';
import { setSearchValue } from '@/store/slices';
import { ISearchBar } from '@/types';

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

  const handlerKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== KEY_CODES.ENTER) return;

    handleSearch();
  };

  return (
    <StyledSearchSection>
      <SearchInput
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchValue}
        onKeyDown={handlerKeyPress}
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
