import React, { FC } from 'react';

import {
  DarkFacebook,
  DarkInstagram,
  DarkLinkedin,
  DarkTwitter,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '@/assets';
import { IconButton } from '@/components';
import { DICTIONARY, LINKS } from '@/constants';
import { useTypedSelector } from '@/hooks';
import { getCurrentThemeValue } from '@/store/slices';

import {
  StyledContainer,
  StyledHideLinksContainer,
  StyledIconButtonsWrapper,
  StyledMetadataSection,
  StyledShowLinksContainer,
  StyledText,
} from './styled';

const MetadataSection: FC = () => {
  const currentTheme = useTypedSelector(getCurrentThemeValue);

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
          <IconButton
            img={currentTheme ? Facebook : DarkFacebook}
            link={LINKS.FACEBOOK}
          />
          <IconButton
            img={currentTheme ? Twitter : DarkTwitter}
            link={LINKS.TWITTER}
          />
          <IconButton
            img={currentTheme ? Instagram : DarkInstagram}
            link={LINKS.INSTAGRAM}
          />
          <IconButton
            img={currentTheme ? Linkedin : DarkLinkedin}
            link={LINKS.LINKEDIN}
          />
        </StyledIconButtonsWrapper>
      </StyledHideLinksContainer>
    </StyledMetadataSection>
  );
};
export { MetadataSection };
