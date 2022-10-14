import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import instaIcon from '../../assets/images/instagram.svg';
import linkedinIcon from '../../assets/images/linkedin.svg';
import githubIcon from '../../assets/images/github.svg';




function ContactMe() {
  return (
    <div id="page-contact">
      <PageHeader title='Contact Me'>
        <div className="buttons-row">

          <a className="one-button" href='https://github.com/Luiza-cm'>
              <div className="container-dark-buttons-contact">
                  <img src={githubIcon} className="insta-icon" alt='Github logo with link to Luizas profile'></img>
              </div>
              <p>Github</p>
          </a>

          <a className="one-button" href='https://br.linkedin.com/in/luiza-moncao-a09151923'>
              <div className="container-dark-buttons-contact">
                  <img src={linkedinIcon} className="insta-icon" alt='Linkedin logo with link to Luizas profile'></img>
              </div>
              <p>Linkedin</p>
          </a>

          <a className="one-button" href='https://www.instagram.com/luizamoncao/'>
              <div className="container-dark-buttons-contact">
                  <img src={instaIcon} className="insta-icon" alt='Instagram logo with link to Luizas profile'></img>
              </div>
              <p>Instagram</p>
          </a>

        </div>

      </PageHeader>

      <div className="body-container">
        <div className="body-content">
          <p className="description">
            Click on icons above to access my social midias <br /><br />
            If you prefer, you can send me an email message using the fields bellow:
          </p>
          
        </div>
        
      </div>

    </div>
  );
}

export default ContactMe;