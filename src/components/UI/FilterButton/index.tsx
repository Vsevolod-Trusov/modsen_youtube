import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks';
import { getCategory, setCategory } from '@/store/slices';
import { IFilterButton } from '@/types';

import { StyledFilterButton, StyledSelectedCategoryButton } from './styled';

const FilterButton: FC<IFilterButton> = ({ name, testId }) => {
  const dispatch = useDispatch();

  const selectedCategory = useTypedSelector(getCategory);

  const handleSelectingCategory = () => {
    dispatch(setCategory(name));
  };

  return (
    <>
      {selectedCategory === name ? (
        <StyledSelectedCategoryButton test-id={testId}>
          {name}
        </StyledSelectedCategoryButton>
      ) : (
        <StyledFilterButton onClick={handleSelectingCategory} test-id={testId}>
          {name}
        </StyledFilterButton>
      )}
    </>
  );
};
export default FilterButton;
