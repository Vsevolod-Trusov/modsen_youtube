import React, { FC } from 'react';

import { FilterButton } from '@/components/UI';
import { CATEGORIES, TEST_IDS } from '@/constants';

import { StyledContainer, StyledWrapper } from './styled';

const CategoriesSection: FC = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        {CATEGORIES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            data-test-id={TEST_IDS.CATEGORY_ID}
          />
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};
export { CategoriesSection };
