import React, { FC, useContext } from 'react';

import { FilmsList, Footer, Header, Main } from '@/components';

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
      <Main>{loading ? <h1>Loading </h1> : <FilmsList />}</Main>
      <Footer />
    </StyledWrapper>
  );
};

export default MoviesPage;
