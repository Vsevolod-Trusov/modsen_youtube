import React, { FC } from 'react';

import { CompanySection, MetadataSection } from '@/components';

import { StyledFooterContainer, StyledFooterWrapper } from './styled';

const Footer: FC = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterWrapper>
        <MetadataSection />
        <CompanySection />
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
};

export default Footer;
