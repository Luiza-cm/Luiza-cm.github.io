import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import { faRocket, faRankingStar, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import DarkButton from '../../components/DarkButton';
import ContentCard from '../../components/ContentCard';

enum AboutSections {
  Goals = 0,
  Projects = 1,
  Skills = 2,
}

function MyWork() {
  const [selectedSection, setSelectedSection] = useState<AboutSections>(AboutSections.Goals)

  return (
    <div id="page-work">
      <PageHeader title='My Work'>

        <div className="buttons-row">

          <DarkButton
            icon={faRocket}
            title="Goals" 
            active={selectedSection === AboutSections.Goals} 
            onClick={() => setSelectedSection(AboutSections.Goals)}
          />

          <DarkButton
            icon={faLaptopCode}
            title="Projects" 
            active={selectedSection === AboutSections.Projects} 
            onClick={() => setSelectedSection(AboutSections.Projects)}
          />

          <DarkButton
            icon={faRankingStar}
            title="Skills" 
            active={selectedSection === AboutSections.Skills} 
            onClick={() => setSelectedSection(AboutSections.Skills)}
          />

        </div>

      </PageHeader>

      <div className="body-container">
        <ContentCard active={selectedSection === AboutSections.Goals}>
          <p className="description">
          My main objective is to contribute the best way I can to society, whether working with engineering or software development.
          <br /><br />
          As a software developer, my goals are to continually grow in the area and develop applications that positively impact people's lives, generating value and automating tasks.
          </p>
        </ContentCard>
        
        <ContentCard active={selectedSection === AboutSections.Projects}>
          <p className="description">
            Olaaar2 <br /><br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et -ptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
        </ContentCard>

        <ContentCard active={selectedSection === AboutSections.Skills}>
          <p className="description">
            Olaaar3 <br /><br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamcasojdnaos oansodnaos aonaso laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
        </ContentCard>
      </div>

    </div>
  );
}

export default MyWork;