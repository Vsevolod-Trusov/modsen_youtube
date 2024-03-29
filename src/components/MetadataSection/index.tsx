import React, { FC } from 'react';

import { IconButton } from '@/components';
import { DICTIONARY, LINKS } from '@/contants';

import { Facebook, Instagram, Linkedin, Twitter } from '@/assets';
import {
  StyledContainer,
  StyledHideLinksContainer,
  StyledIconButtonsWrapper,
  StyledMetadataSection,
  StyledShowLinksContainer,
  StyledText,
} from './styled';

const MetadataSection: FC = () => {
  return (
    <StyledMetadataSection>
      <StyledShowLinksContainer>
        <StyledIconButtonsWrapper>
          <IconButton img={Facebook} link={LINKS.FACEBOOK} />
          <IconButton img={Twitter} link={LINKS.TWITTER} />
          <IconButton img={Instagram} link={LINKS.INSTAGRAM} />
          <IconButton img={Linkedin} link={LINKS.LINKEDIN} />
        </StyledIconButtonsWrapper>
      </StyledShowLinksContainer>
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
      <StyledHideLinksContainer>
        <StyledIconButtonsWrapper>
          <IconButton img={Facebook} link={LINKS.FACEBOOK} />
          <IconButton img={Twitter} link={LINKS.TWITTER} />
          <IconButton img={Instagram} link={LINKS.INSTAGRAM} />
          <IconButton img={Linkedin} link={LINKS.LINKEDIN} />
        </StyledIconButtonsWrapper>
      </StyledHideLinksContainer>
    </StyledMetadataSection>
  );
};
export default MetadataSection;
