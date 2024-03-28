import React from 'react';

import { FilterButton } from '../UI';
import { StyledContainer, StyledWrapper } from './styled';

const CATEGORIES = [
  'All',
  'action',
  'drama',
  'crime',
  'romantic',
  'horror',
  'documentary',
];

const CategoriesSection = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        {CATEGORIES.map((name) => (
          <FilterButton key={crypto.randomUUID()}>{name}</FilterButton>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};
export default CategoriesSection;
