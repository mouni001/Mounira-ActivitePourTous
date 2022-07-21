import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container} from 'react-bootstrap';
import videoBg from './videoBg.mp4'
import {  Link } from "react-router-dom";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Home from './Home';
import Reservation from './Reservation';
import Activities from './Activities';
import Commentaire from './Commentaire';

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className='header'>
      <Navbar bg="light" variant="">
        <Container>
          <Navbar.Brand to='/Home' >{t('title')}</Navbar.Brand>
          <Nav className="me-auto">
            
            <Link to='/'className="headerlink" >{t('link_Home')}</Link>
            <Link to='/Activities'className="headerlink" >{t('link_activity')}</Link>
            <Link to='/Reservation'className="headerlink" >{t('link_Reservation')}</Link>
            <Link to='/Commentaire'className="headerlink" >{t('link_Comments')}</Link>
            <button className='btn btn-dark' 
            style={{
       
              marginLeft: "545px"
              
            }}
            onClick={() => i18next.changeLanguage('en')}>English</button>
      <button className='btn btn-dark' onClick={() => i18next.changeLanguage('bn')}>Francais</button>
          </Nav>
        </Container>
      </Navbar>
      
    </div> 
  )
}

export default Header