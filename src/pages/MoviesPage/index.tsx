import React, { FC } from 'react';

import { AvatarIcon, Preview } from '@/assets';
import {
  CompanySection,
  FilmCard,
  Footer,
  Header,
  Main,
  MetadataSection,
} from '@/components';
import ScrollButton from '@/components/UI/ScrollButton';
import { DICTIONARY } from '@/contants';

import {
  StyledFilmsContainer,
  StyledFooterWrapper,
  StyledScrollButtonContainer,
  StyledWrapper,
} from './styled';

const FILMS = [
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
  {
    id: crypto.randomUUID(),
    icon: AvatarIcon,
    preview: Preview,
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    createdAt: '1994',
  },
];

const MoviesPage: FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <Main>
        <StyledFilmsContainer>
          {FILMS.map(({ preview, icon, title, author, createdAt }) => (
            <FilmCard
              key={crypto.randomUUID()}
              preview={preview}
              avatar={icon}
              title={title}
              author={author}
              createdAt={createdAt}
            />
          ))}
        </StyledFilmsContainer>
        <StyledScrollButtonContainer>
          <ScrollButton>{DICTIONARY.SHOW_MORE}</ScrollButton>
        </StyledScrollButtonContainer>
      </Main>
      <Footer>
        <StyledFooterWrapper>
          <MetadataSection />
          <CompanySection />
        </StyledFooterWrapper>
      </Footer>
    </StyledWrapper>
  );
};

export default MoviesPage;
