import { AboutContainer, InfoContainer, StyledImage } from './About.style';

import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Josh Smith</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Mustafa</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already learned JavaScript, React, Python.
        </h4>
        <h2>
          <a href="https://github.com/MSKose">Check out my Github profile</a>
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
