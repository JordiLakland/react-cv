import React from 'react';
import Address from './components/Address';
import PhoneNumber from './components/PhoneNumber';
import MailAddress from './components/MailAddress';
import SocialProfile from './components/SocialProfile';
import Section from './components/Section';
import EducationItem from './components/EducationalItem';
import Html from './components/Html';
import List from './components/List';
import Skills from './components/Skills';
import Languages from './components/Languages';
import ExperienceItem from './components/ExperienceItem';

//CV Jordi Cantó Gálvez

import {
  candidate, experience, education, contact,
  profiles, languages, skills, awards, achievements
} from './data/cv_data';

import './css/App.css';

// TODO: Foot notes

function App() {
  return (
    <div className="App">

      <div id="main">

        <header>
          <h1>{candidate.name}<br/>{candidate.lastname}</h1>
          <h2>{candidate.position}</h2>
          <h3>{candidate.highestDegree}</h3>
        </header>

        <Section title="Experiencia">
          {experience.map((item, index) => <ExperienceItem key={index} {...item} />)}
        </Section>

        <Section title="Educación">
          {education.map((item, index) => <EducationItem key={index} {...item} />)}
        </Section>

      </div>

      <div id="side">

        <Section className="contact">
          <img className="picture" src={candidate.picture} alt={candidate.name} />
          <Address>{candidate.address}</Address>
          <PhoneNumber>{contact.phoneNumber}</PhoneNumber>
          <MailAddress>{contact.email}</MailAddress>
          {profiles.map((profile, index) => <SocialProfile key={index} {...profile} />)}
        </Section>

        <Section title="Habilidades">
          <Skills data={skills} />
        </Section>

        <Section title="Idiomas">
          <Languages data={languages} />
        </Section>

        {awards.length > 0  && 
          <Section title="Premios">
            <List className="no-style no-indent space-between-items">
              {awards.map( (item, index) => <Html key={index}>{item}</Html>)}
            </List>
          </Section>
        }

        {achievements.length > 0 &&
          <Section title="Research achievements">
            <List className="no-style no-indent space-between-items">
              {achievements.map( (item, index) => <Html key={index}>{item}</Html>)}
            </List>
          </Section>
        }

      </div>

    </div>
  );
}

export default App;
