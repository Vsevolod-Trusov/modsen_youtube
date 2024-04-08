import { styled } from 'styled-components';

import { StyledContainer } from '@/components/CompanySection/styled';

const StyledFilmsContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  columnGap: '1%',
  flexWrap: 'wrap',
});

const StyledScrollButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '35px 0px',
});

const StyledMockContainer = styled(StyledContainer)({
  minHeight: '400px',
  alignItems: 'center',
});

export {
  StyledFilmsContainer,
  StyledMockContainer,
  StyledScrollButtonContainer,
};
