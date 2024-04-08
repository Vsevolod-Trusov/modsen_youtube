import React, { FC } from 'react';

import { FilterButton } from '@/components/UI';
import { CATEGORIES } from '@/contants';

import { StyledContainer, StyledWrapper } from './styled';

const CategoriesSection: FC = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        {CATEGORIES.map((name) => (
          <FilterButton key={crypto.randomUUID()} name={name} />
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};
export default CategoriesSection;
