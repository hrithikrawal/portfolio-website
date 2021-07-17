import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import {SocialIcons, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+918979386832">+918979386832</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hrithikrawal4@gmail.com">hrithikrawal4@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem href="/images/Resume (1).docx" download="Resume (1).docx">Download</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Imagination turns to innovation.</Slogan>
        </CompanyContainer>
         <SocialIcons href="https://github.com/hrithikrawal">
        <AiFillGithub size='3rem'/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/hrithik-rawal-7442141b3/">
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/hrithik.rawal/">
        <AiFillInstagram size='3rem'/>
      </SocialIcons>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
