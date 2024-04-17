import React, { FC } from 'react';

import {
  FilmsList,
  Footer,
  Header,
  Main,
  SkeletonLoadersList,
} from '@/components';
import { DEFAULT_AMOUNT } from '@/contants';
import { useTypedSelector } from '@/hooks';
import { getIsLoading } from '@/store/slices';

import { StyledWrapper } from './styled';

const MoviesPage: FC = () => {
  const isLoading = useTypedSelector(getIsLoading);

  return (
    <StyledWrapper>
      <Header />
      <Main>
        {isLoading ? (
          <SkeletonLoadersList amount={DEFAULT_AMOUNT} />
        ) : (
          <FilmsList />
        )}
      </Main>
      <Footer />
    </StyledWrapper>
  );
};

export { MoviesPage };
