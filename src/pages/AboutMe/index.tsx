import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import { faUser, faGraduationCap, faGuitar, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import DarkButton from '../../components/DarkButton';
import ContentCard from '../../components/ContentCard';
import ProfileImg from '../../assets/images/profile-image.jpeg'

enum AboutSections {
  Hello = 0,
  Experience = 1,
  Academic = 2,
  Hobbies = 3
}

function AboutMe() {
  const [selectedSection, setSelectedSection] = useState<AboutSections>(AboutSections.Hello)


  return (
    <div id="page-about">
      <PageHeader title="About Me">

        <div className="buttons-row">

          <DarkButton
            icon={faUser}
            title="Hello"
            active={selectedSection === AboutSections.Hello}
            onClick={() => setSelectedSection(AboutSections.Hello)}
          />

          <DarkButton
            icon={faBookOpen}
            title="Experience"
            active={selectedSection === AboutSections.Experience}
            onClick={() => setSelectedSection(AboutSections.Experience)}
          />

          <DarkButton
            icon={faGraduationCap}
            title="Academic"
            active={selectedSection === AboutSections.Academic}
            onClick={() => setSelectedSection(AboutSections.Academic)}
          />

          <DarkButton
            icon={faGuitar}
            title="Hobbies"
            active={selectedSection === AboutSections.Hobbies}
            onClick={() => setSelectedSection(AboutSections.Hobbies)}
          />


          {/* <div className="one-button" onClick={() => setSelectedSection(AboutSections.Experience)}>
            <div className={`container-dark-buttons ${selectedSection === AboutSections.Experience ? "active" : ""}`}>
              <FontAwesomeIcon icon={faBookOpen} size="2x" />
            </div>
            <p>Experience</p>
          </div> */}

        </div>

      </PageHeader>

      <div className="body-container">
        <ContentCard active={selectedSection === AboutSections.Hello}>
          <div className='image-text'>
            <img src={ProfileImg} className="profile-image" alt='Luizas profile'/>
            <h2>Hi there!</h2>
          </div>
          <p className="description">
            My name is Luiza, I'm a 25 years old woman from Brasília - Brazil, with a bachelor's degree in 
            Mechatronics Engineering (Control and Automation) at UnB. 
            <br/><br/>
            Apart from these social labels, I would 
            describe myself as a curious person who likes to learn about everything and to understand how 
            complex things works. I've always had more identification with scientific knowledge, but I'm also 
            extremely passionate about music, nature, visual arts and yoga.
            <br/><br/>
            What I like most about myself is my determination, when I decide to do something, I do my best and 
            I don't give up until I succeed, regardless of the difficulty.
          </p>
        </ContentCard>

        <ContentCard active={selectedSection === AboutSections.Experience}>
          <p></p>
          <ul className='itens-container'>
            <li className='itens-style'>Software Developer (Certi Foundation)</li>
            Software development in Full-Stack model.
            Experience with Flutter, Angular and Groovy frameworks; Javascript; database; web server; version control; etc.
            <br/><br/>

            <li className='itens-style'>Software Developer (Chap0lin Solutions)</li>
            Software development in Front-End model.
            Experience with React framework and Typescript.
            <br/><br/>

            <li className='itens-style'>Software Development Internship (Certi Foundation)</li>
            Internship in software development, full-stack model. Acquisition of knowledge in Groovy, Grails, Web Server, Java, HTML, Javascript and database. Experience in agile Scrum methodology.
            <br/><br/>

            <li className='itens-style'>Innovation Consultant (Junior Enterprise)</li>
            Development of automation products and projects.
            Technical visits, consultancy and elaboration of technical reports.
            Experience with monitoring systems, C and C++ languages, and microcontrollers.
            
          </ul>
        </ContentCard>

        <ContentCard active={selectedSection === AboutSections.Academic}>
          <p className="description">
            I have a bachelor's degree in Mechatronics Engineering (Control and Automation) from the University of 
            Brasília (UnB), the fifth best federal university in Brazil. 
            <br/><br/>
            In college I sought to participate in initiatives that added to my theoretical and practical knowledge,
            such as Junior Company, courses and mini-courses.
            <br/><br/>
            My undergraduate work was about the study and development of a command interface for a wheelchair mounted 
            robotic arm, using computer vision.
          </p>
        </ContentCard>

        <ContentCard active={selectedSection === AboutSections.Hobbies}>
          <p className="description">
          In my spare time, I really like to exercise my creative side, take care of my health and learn new things, 
          like playing songs that I love on guitar, drawing beautiful things, doing yoga, reading and learning about 
          self-knowledge and oriental philosophies.
          <br/><br/>
          A curiosity about me is that I just love being in contact with nature, especially on beaches and waterfalls.
          </p>
        </ContentCard>

      </div>
    </div>
  );
}

export default AboutMe;