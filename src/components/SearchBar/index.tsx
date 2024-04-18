import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchIcon } from '@/assets';
import { ElasticSearch, Image, SearchButton, SearchInput } from '@/components';
import { EMPTY_STRING, KEY_CODES } from '@/constants';
import { useTypedSelector } from '@/hooks';
import { getSearchValue, setSearchValue } from '@/store/slices';
import { ISearchBar } from '@/types';

import {
  StyledSearchImageWrapper,
  StyledSearchSection,
  StyledSearchWrapper,
} from './styled';

const SearchBar: FC<ISearchBar> = ({ placeholder }) => {
  const searchingValue = useTypedSelector(getSearchValue);
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
      <StyledSearchWrapper>
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
        {!!searchingValue?.length && <ElasticSearch />}
      </StyledSearchWrapper>
    </StyledSearchSection>
  );
};

export { SearchBar };
