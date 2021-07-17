import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }} href="#">
          <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/images/Resume (1).docx" download="Resume (1).docx">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/hrithikrawal" target="_blank">
        <AiFillGithub size='3rem'/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/hrithik-rawal-7442141b3/" target="_blank">
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/hrithik.rawal/" target="_blank">
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
