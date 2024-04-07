import React, { FC, useMemo } from 'react';

import { SkeletonLoader } from '@/components';
import { StyledFilmsContainer } from '@/components/FilmsList/styled';
import { ISkeletonLoadersList } from '@/types';

const SkeletonLoadersList: FC<ISkeletonLoadersList> = ({ amount }) => {
  const loaders = useMemo(() => {
    return new Array(amount).fill(0);
  }, [amount]);

  return (
    <StyledFilmsContainer>
      {loaders.map(() => (
        <SkeletonLoader key={crypto.randomUUID()} />
      ))}
    </StyledFilmsContainer>
  );
};
export default SkeletonLoadersList;
