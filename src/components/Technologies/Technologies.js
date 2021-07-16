import React from 'react';
import { DiAptana, DiCode, DiMootools, DiMootoolsBadge,  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle style={{paddingTop: "50px"}}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world from design to basic of backend.
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem"/> <br />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python <br />
            Html and Css <br />
            Javascript <br />
            C++ <br />


          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAptana size="3rem"/> <br />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            React.js <br />
            Django <br />
            Bootstrap <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMootoolsBadge size="3rem"/> <br />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git-Github <br />
            Chrome DevTools <br />
            Figma <br />
            Vs Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
