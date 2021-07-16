import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section style={{paddingTop:'60px'}} row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br />
        I am Hrithik Rawal
      </SectionTitle>
      <SectionText>
        A web developer pasionate about creating interactive applications and experience on web.
      </SectionText>
      <a href="mailto:hrithikrawal4@gmail.com">
        <Button>Get in Touch</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;