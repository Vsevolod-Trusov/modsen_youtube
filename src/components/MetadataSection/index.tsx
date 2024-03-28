import React, { FC } from 'react';

import { IconButton } from '@/components';
import { DICTIONARY, LINKS } from '@/contants';

import { Facebook, Instagram, Linkedin, Twitter } from '@/assets';
import {
  StyledContainer,
  StyledIconButtonsWrapper,
  StyledLinksContainer,
  StyledMetadataSection,
  StyledText,
} from './styled';

const MetadataSection: FC = () => {
  return (
    <StyledMetadataSection>
      <StyledContainer>
        <StyledText>{DICTIONARY.POLICY}</StyledText>
        <StyledText>{DICTIONARY.YOU_TUBE_WORKS}</StyledText>
        <StyledText>{DICTIONARY.TEST_FEATURE}</StyledText>
      </StyledContainer>
      <StyledContainer>
        <StyledText>{DICTIONARY.ABOUT_COPYRIGHT}</StyledText>
        <StyledText>{DICTIONARY.CONTACT_US}</StyledText>
        <StyledText>{DICTIONARY.ADVERTISE_DEVELOPERS}</StyledText>
      </StyledContainer>
      <StyledLinksContainer>
        <StyledIconButtonsWrapper>
          <IconButton img={Facebook} link={LINKS.FACEBOOK} />
          <IconButton img={Twitter} link={LINKS.TWITTER} />
          <IconButton img={Instagram} link={LINKS.INSTAGRAM} />
          <IconButton img={Linkedin} link={LINKS.LINKEDIN} />
        </StyledIconButtonsWrapper>
      </StyledLinksContainer>
    </StyledMetadataSection>
  );
};
export default MetadataSection;
