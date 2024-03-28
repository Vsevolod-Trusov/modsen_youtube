import React, { FC } from 'react';

import { DICTIONARY } from '@/contants';

import { StyledContainer } from './styled';

const CompanySection: FC = () => {
  return (
    <StyledContainer>
      <div>{DICTIONARY.MODSEN_COMPANY}</div>
    </StyledContainer>
  );
};
export default CompanySection;
