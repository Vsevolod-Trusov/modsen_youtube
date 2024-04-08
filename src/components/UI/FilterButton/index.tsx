import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks';
import { getCategory, setCategory } from '@/store/slices';
import { IFilterButton } from '@/types';

import { StyledFilterButton, StyledSelectedCategoryButton } from './styled';

const FilterButton: FC<IFilterButton> = ({ name }) => {
  const dispatch = useDispatch();

  const selectedCategory = useTypedSelector(getCategory);

  const handleSelectingCategory = () => {
    dispatch(setCategory(name));
  };

  return (
    <>
      {selectedCategory === name ? (
        <StyledSelectedCategoryButton>{name}</StyledSelectedCategoryButton>
      ) : (
        <StyledFilterButton onClick={handleSelectingCategory}>
          {name}
        </StyledFilterButton>
      )}
    </>
  );
};
export default FilterButton;
