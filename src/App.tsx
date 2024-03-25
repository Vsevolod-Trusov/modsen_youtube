import React, { FC } from 'react';
import styled from 'styled-components';

import { FilterButton, Footer, Header, Main } from '@/components';

const StyledWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const App: FC = () => {
  return (
    <StyledWrapper>
      <Header>
        <FilterButton>All</FilterButton>
      </Header>
      <Main>main</Main>
      <Footer>footer</Footer>
    </StyledWrapper>
  );
};

export default App;
