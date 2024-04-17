import React, { FC } from 'react';

import { CategoriesSection, SearchSection } from '@/components';

import { StyledHeaderContainer, StyledHeaderWrapper } from './styled';

const Header: FC = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <SearchSection />
        <CategoriesSection />
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export { Header };
