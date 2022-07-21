import React from 'react';
import videoBg from './assets/videoBg.mp4'
import enfants from './assets/enfants.jpg'
import personne from './assets/personne-agée.jpg'
import Famille from './assets/Famille_2.jpg'
import femmes from './assets/femmes.jpg'
import homme from './assets/homme.jpg'
import ado from './assets/ado.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {  Link } from "react-router-dom";






const Main = () => {
    return(
        <div className='main'>
            <video src={videoBg} autoPlay loop muted />
            <div class="content">
    <h1>Un bon moment vous attend!</h1>
    <h5>Inscrivez-vous à une activité de votre choix dès maintenant</h5>
    <Link to="/Reservation" button type="button" class="btn btn-light" >Réservez votre place</Link>
  </div>
  <div class="container">
    <div class="but">
    <h1>But de l'Entreprise</h1>
    <h3>Activités pour tous offre des activités et des ateliers communautaires<span className="navbar-brand"> gratuits</span>pour les gens de 
     <span className="navbar-brand"> différentes tranches d’âge</span></h3>
    </div>
  </div>
  <div class="container">
    <h2> Trouvez une ativités selon votre groupe d'âge!</h2>
    </div>
      <div className="mydivcontainer">
        <div className="mydiv"> 
        <div class="container2">
        <img src={enfants} alt="Enfants" className="img2"/>
        <div class="overlay">
          <div class="text">Enfants</div>
          <div class="savoir"><Link to="/Activities">En savoir plus</Link></div>
        </div>
      </div>
      </div>
      <div className="mydiv"> 
        <div class="container2">
        <img src={personne} alt="Enfants" className="img2"/>
        <div class="overlay">
          <div class="text">Ainées</div>
          <div class="savoir"><Link to="/Activities">En savoir plus</Link></div>
        </div>
      </div>
      </div>
      <div className="mydiv"> 
        <div class="container2">
        <img src={Famille} alt="Enfants" className="img2"/>
        <div class="overlay">
          <div class="text">Famille</div>
          <div class="savoir"><Link to="/Activities">En savoir plus</Link></div>
        </div>
      </div>
      </div>
      <div className="mydiv"> 
        <div class="container2">
        <img src={femmes} alt="Enfants" className="img2"/>
        <div class="overlay">
          <div class="text">Femmes</div>
          <div class="savoir"><Link to="/Activities">En savoir plus</Link></div>
        </div>
      </div>
      </div>
      <div className="mydiv"> 
        <div class="container2">
        <img src={homme} alt="Enfants" className="img2"/>
        <div class="overlay">
          <div class="text">Hommes</div>
          <div class="savoir"><Link to="/Activities">En savoir plus</Link></div>
        </div>
      </div>
      </div>
      <div className="mydiv"> 
        <div class="container2">
        <img src={ado} alt="Enfants" className="img2"/>
        <div class="overlay">
          <div class="text">Adolescent</div>
          <div class="savoir"><Link to="/Activities">En savoir plus</Link></div>
        </div>
      </div>
      </div>
      </div>
      </div>
    
  
    )
}

export default Main;