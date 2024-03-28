import React, { FC } from 'react';

import { Logo, SearchBar, ToggleButton } from '@/components';
import { DICTIONARY } from '@/contants';

import { StyledContainer } from './styled';

const SearchSection: FC = () => {
  return (
    <StyledContainer>
      <div>
        <Logo title={DICTIONARY.LOGO_TITLE} />
      </div>
      <SearchBar placeholder={DICTIONARY.SEARCH_INPUT_PLACEHOLDER} />
      <div>
        <ToggleButton />
      </div>
    </StyledContainer>
  );
};

export default SearchSection;
