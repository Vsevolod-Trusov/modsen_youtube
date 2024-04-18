import React, { FC } from 'react';

import { ElasticCard } from '@/components';
import { AUTHOR_NAME, NO_SUCH_FILMS } from '@/constants';
import { useTypedSelector } from '@/hooks';
import { getFilms } from '@/store/slices';

import { StyledContainer, StyledMockContainer } from './styled';

const ElasticSearch: FC = () => {
  const films = useTypedSelector(getFilms);

  return (
    <StyledContainer>
      {films?.length ? (
        <>
          {films.map(({ id, title, year }) => (
            <ElasticCard
              id={id}
              key={id}
              title={title}
              author={AUTHOR_NAME}
              createdAt={year.toString()}
            />
          ))}
        </>
      ) : (
        <StyledMockContainer>
          <div>{NO_SUCH_FILMS}</div>
        </StyledMockContainer>
      )}
    </StyledContainer>
  );
};
export { ElasticSearch };
