import React, { FC } from 'react';

import { Logo, MenuButton, SearchBar, ToggleButton } from '@/components';
import { DICTIONARY } from '@/constants';

import {
  HideContainer,
  ShowContainer,
  StyledContainer,
  StyledSearchSection,
  StyledSearchShowContainer,
} from './styled';

const SearchSection: FC = () => {
  return (
    <StyledContainer>
      <div>
        <Logo title={DICTIONARY.LOGO_TITLE} />
      </div>
      <StyledSearchSection>
        <SearchBar placeholder={DICTIONARY.SEARCH_INPUT_PLACEHOLDER} />
      </StyledSearchSection>
      <HideContainer>
        <ToggleButton />
      </HideContainer>
      <ShowContainer>
        <MenuButton />
      </ShowContainer>
      <StyledSearchShowContainer>
        <SearchBar placeholder={DICTIONARY.SEARCH_INPUT_PLACEHOLDER} />
      </StyledSearchShowContainer>
    </StyledContainer>
  );
};

export { SearchSection };
