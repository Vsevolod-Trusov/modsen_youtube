import styled from 'styled-components';

import { StyledMockContainer as FilmCardMock } from '@/components/FilmsList/styled';

const StyledContainer = styled('section')(({ theme }) => ({
  position: 'absolute',
  background: theme.colors.gray || theme.colors.white,
  top: '38px',
  width: '100%',
  maxHeight: '400px',
  minHeight: '100px',
  padding: '10px',
  borderRadius: '20px',
  overflowY: 'auto',
}));

const StyledMockContainer = styled(FilmCardMock)({
  minHeight: '100px',
});

export { StyledContainer, StyledMockContainer };
