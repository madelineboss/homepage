import React from 'react';
import opalPhoto from '../images/Madeline+Opal.jpg';
import "./aboutMe.css"

function About() {
  return (
    <div className="About">
      <h1>All about me!</h1>
      <div className="Bio">
        <h4>Bio</h4>
        <p>My name is Madeline Boss and I am a senior at Florida State University. Go Noles!</p>
      </div>

      <div className="Background">
        <h4>Background</h4>
        <p>At FSU, I am studying Computer Science and Cyber Criminology. I hold some work experience in both 
            software engineering and information technology. This past summer I worked as a Software Engineering intern
            at L3Harris Technologies. While I am at school, I work as an Information Technology intern at 
            the FSU Career Center IT Department.
        </p>
      </div>

      <div className="FunFacts">
        <h4>Fun Facts!</h4>
        <p>Some fun facts about me are that I own a cat, I enjoy doing pottery, 
            and am currently watching Gilmore Girls!
        </p>
        <img src={opalPhoto} className="opal" alt="Me and my cat at my birthday!" />
      </div>
    </div>
  );
}

export default About;