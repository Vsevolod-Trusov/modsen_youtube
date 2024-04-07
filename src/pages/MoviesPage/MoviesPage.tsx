import React, { FC, useContext } from 'react';

import {
  FilmsList,
  Footer,
  Header,
  Main,
  SkeletonLoadersList,
} from '@/components';
import { DEFAULT_AMOUNT } from '@/contants';

import { MoviesContext } from './context';
import { StyledWrapper } from './styled';

// const FILMS = [
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
//   {
//     id: crypto.randomUUID(),
//     icon: AvatarIcon,
//     preview: Preview,
//     title: 'The Shawshank Redemption',
//     author: 'Stephen King',
//     createdAt: '1994',
//   },
// ];

const MoviesPage: FC = () => {
  const { loading } = useContext(MoviesContext);

  return (
    <StyledWrapper>
      <Header />
      <Main>
        {loading ? (
          <SkeletonLoadersList amount={DEFAULT_AMOUNT} />
        ) : (
          <FilmsList />
        )}
      </Main>
      <Footer />
    </StyledWrapper>
  );
};

export default MoviesPage;
