import React , {useState} from 'react';
import {  Link } from "react-router-dom";
import cuisine from './assets/cookingClass.jpg'
import {button} from 'react-bootstrap';
import aqua from './assets/aqua-form.jpg'
import art from './assets/art.jpg'
import art2 from './assets/art2.jpg'
import ESCALADEC from './assets/ESCALADEC.jpg'
import gardening from './assets/gardening.jpg'
import peinture from './assets/peinture.jpg'
import peinture2 from './assets/peinture.jfif'
import poterie from './assets/poterie.jpg'
import velo from './assets/velo.jpg'
import yoga from './assets/Yoga-portrait-des-avantages.jpg'
import escalade from './assets/escalade.jpg'
import cuisinehomme from './assets/cuisinehomme.jpg'
import artado from './assets/artado.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function ShowTable() {
  const [Tous, setDescription] = useState(true);
  const [Femmes, setReviews] = useState(false);
  const [Personne, setPersonne] = useState(false);
  const [Famille, setFamille] = useState(false);
  const [Hommes, setHommes] = useState(false);
  const [Ado, setAdo] = useState(false);
  const [Enfants, setEnfants] = useState(false);
  const descriptionHandler = () => {
      setDescription(true);
      setReviews(true);
      setPersonne(true);
      setFamille(true);
      setHommes(true);
      setAdo(true);
      setEnfants(true)
  };
  const reviewsHandler = () => {
      setDescription(false);
      setReviews(true);
      setPersonne(false);
      setFamille(false);
      setHommes(false);
      setAdo(false);
      setEnfants(false)
  };
  const PersonneHandler = () => {
    setDescription(false);
    setReviews(false);
    setPersonne(true);
    setFamille(false);
    setHommes(false);
    setAdo(false);
    setEnfants(false)
};
const FamilleHandler = () => {
  setDescription(false);
  setReviews(false);
  setPersonne(false);
  setFamille(true);
  setHommes(false);
  setAdo(false);
  setEnfants(false)
};
const HommesHandler = () => {
  setDescription(false);
  setReviews(false);
  setPersonne(false);
  setFamille(false);
  setHommes(true);
  setAdo(false);
  setEnfants(false)
};
const AdoHandler = () => {
  setDescription(false);
  setReviews(false);
  setPersonne(false);
  setFamille(false);
  setHommes(false);
  setAdo(true);
  setEnfants(false)
};
const EnfantHandler = () => {
    setDescription(false);
    setReviews(false);
    setPersonne(false);
    setFamille(false);
    setHommes(false);
    setAdo(false);
    setEnfants(true)
  };
  return (
      <div>
        <div className='containerbutton2'>
            <p>Selectionnez une catégorie</p>
          <button type="button" class="btnmine" onClick={descriptionHandler}>
              Tous</button>
          <button type="button" class="btnmine" onClick={reviewsHandler}>
              Femmes</button>
          <button  type="button" class="btnmine" onClick={PersonneHandler}>
              Ainés</button>
          <button type="button" class="btnmine" onClick={FamilleHandler}>
              Famille</button>
          <button type="button" class="btnmine" onClick={HommesHandler}>
              Hommes</button>
          <button type="button" class="btnmine" onClick={AdoHandler}>
              Adolescent</button>
        <button type="button" class="btnmine" onClick={EnfantHandler}>
              Enfants</button>
              </div>
          {Tous && (
              <p>
              </p>
          )}
          {Femmes && (
              <p>
                <h1>ACTIVITÉS POUR FEMMES</h1>
                 <div className="mydivcontainer2">
        <div className="mydiv2"><img src={poterie} alt="personne" className="img2"/>
          <h4>Atelier de poterie</h4>
          <p>« …Crée de tes mains ! Et tout à l’intérieur de toi se transformera!… » Elena Barnabé</p>
          <p>Les cours de poterie  s'adressent à tous les niveaux, même 
            débutants. La séance comprend une initiation à toutes les étapes de la poterie</p>
          <p>Place restante: 2/20</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light" >Laissez nous votre commentaire</Link>
        </div>
        
        <div className="mydiv2"><img src={peinture} alt="Famille" className="img2"/>
        <h4>Atelier de peinture</h4>
          <p>Des petites classes guidées par des artistes professionnels fournissent
             aux étudiants le cadre idéal pour poursuivre leur passion</p>
          <p>Place restante: 5/10</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light" >Laissez nous votre commentaire</Link>
        </div>
        <div className="mydiv2"><img src={gardening} alt="femmes" className="img2"/>
        <h4>Jardins Communautaires</h4>
          <p>Passer du temps d
            ans le jardin à s'occuper des plantes et à cultiver notre propre nourriture nous
            fait  apprendre de nouvelles compétences, s'amuser, jouer et développer la confiance en soi.</p>
          <p>Place restante: 2/30</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light" >Laissez nous votre commentaire</Link>
        </div>
       
      </div>
              </p>
          )}
          {Personne && (
              <p>
            <h1>ACTIVITÉS POUR AÎNÉS</h1>
            <div className="mydivcontainer2">
        <div className="mydiv2"><img src={aqua} alt="personne" className="img2"/>
          <h4>Aquaform</h4>
          <p>Nous proposons des cours de natation privés et collectifs pour les nageurs.</p>
          <p>Pour rendre notre piscine accessible et accueillante pour un 
            large éventail de nageurs handicapés, notre piscine possède un certain nombre de caractéristiques uniques.</p>
          <p>Place restante: 9/15</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light" >Laissez nous votre commentaire</Link>
        </div>
        
        <div className="mydiv2"><img src={yoga} alt="Famille" className="img2"/>
        <h4>Yoga pleine air</h4>
          <p>Cours de yoga pour tous, initiation au yoga, 
            hatha, Yin Yoga vinyasa, boutique, méditation. Vivez Une Expérience Mémorable
             Dans Un Espace De Ressourcement Exceptionnel. Tous Les Niveaux. Réservations Disponibles. Prendre Soin De Vous.</p>
          <p>Place restante: 6/30</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        <div className="mydiv2"><img src={art2} alt="femmes" className="img2"/>
        <h4>Atelier d'art</h4>
          <p>Excellents enseignants en peinture à l’huile et l'acrylique, aquarelle et dessin. Plusieurs cours de peinture 
            et de dessin pour tous les âges et tous les niveaux. </p>
          <p>Place restante: 2/30</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
       
      </div>
              </p>
          )}
          {Famille && (
              <p>
        <h1>ACTIVITÉS POUR FAMILLE</h1>
        <div className="mydivcontainer2">
        <div className="mydiv2"><img src={poterie} alt="personne" className="img2"/>
          <h4>Atelier de poterie</h4>
          <p>« …Crée de tes mains ! Et tout à l’intérieur de toi se transformera!… » Elena Barnabé</p>
          <p>Les cours de poterie  s'adressent à tous les niveaux, même 
            débutants. La séance comprend une initiation à toutes les étapes de la poterie</p>
          <p>Place restante: 2/20</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        
        <div className="mydiv2"><img src={peinture} alt="Famille" className="img2"/>
        <h4>Atelier de peinture</h4>
          <p>Des petites classes guidées par des artistes professionnels fournissent
             aux étudiants le cadre idéal pour poursuivre leur passion</p>
          <p>Place restante: 5/10</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        <div className="mydiv2"><img src={gardening} alt="femmes" className="img2"/>
        <h4>Jardins Communautaires</h4>
          <p>Passer du temps d
            ans le jardin à s'occuper des plantes et à cultiver notre propre nourriture nous
            fait  apprendre de nouvelles compétences, s'amuser, jouer et développer la confiance en soi.</p>
          <p>Place restante: 2/30</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        </div>
              </p>
          )}
          {Hommes && (
              <p>
                <h1>ACTIVITÉS POUR HOMMES</h1>
                 <div className="mydivcontainer2">
        <div className="mydiv2"><img src={velo} alt="personne" className="img2"/>
          <h4>Groupe de vélo </h4>
          <p>Joignez-vous à un club cycliste! Sorties de groupe 
            et  conseils techniques pour progresser font partie de l'offre.</p>
          <p>Place restante: 2/20</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        
        <div className="mydiv2"><img src={escalade} alt="Famille" className="img2"/>
        <h4>Escalade</h4>
          <p>L’escalade extérieur est un sport qui requiert de la concentration, de la force 
            et de la flexibilité. C’est un bel exercice pour construire votre endurance physique </p>
          <p>Place restante: 3/8</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        <div className="mydiv2"><img src={cuisinehomme} alt="personne" className="img2"/>
          <h4>Atelier de cuisine</h4>
          <p>La cuisine est un art, qui est facile à apprendre et avec les bons outils, 
            vous aussi pouvez devenir un chef. Nous vous aidons à atteindre l'excellence</p>
          <p>Place restante: 2/20</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
       
      </div> 
              </p>
          )}
          {Ado && (
              <p>
                <h1>ACTIVITÉS POUR ADOLESCENTS</h1>
                  <div className="mydivcontainer2">
                  <div className="mydiv2"><img src={velo} alt="personne" className="img2"/>
          <h4>Groupe de vélo </h4>
          <p>Joignez-vous à un club cycliste! Sorties de groupe 
            et  conseils techniques pour progresser font partie de l'offre.</p>
          <p>Place restante: 2/20</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        
        <div className="mydiv2"><img src={artado} alt="Famille" className="img2"/>
        <h4>Atelier de peinture</h4>
          <p>Des petites classes guidées par des artistes professionnels fournissent
             aux étudiants le cadre idéal pour poursuivre leur passion</p>
          <p>Place restante: 5/10</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        <div className="mydiv2"><img src={escalade} alt="Famille" className="img2"/>
        <h4>Escalade</h4>
          <p>L’escalade extérieur est un sport qui requiert de la concentration, de la force 
            et de la flexibilité. C’est un bel exercice pour construire votre endurance physique </p>
          <p>Place restante: 3/8</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
       
      </div> 
              </p>
          )}
          {Enfants && (
              <p>
                <h1>ACTIVITÉS POUR ENFANTS</h1>
              <div className="mydivcontainer2">
              <div className="mydiv2"><img src={peinture2} alt="femmes" className="img2"/>
        <h4>Atelier de peinture</h4>
          <p>Excellents enseignants en peinture à l’huile et l'acrylique, aquarelle et dessin. Plusieurs cours de peinture 
            et de dessin pour les enfants tous les niveaux. </p>
          <p>Place restante: 2/30</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        
        <div className="mydiv2"><img src={ESCALADEC} alt="Famille" className="img2"/>
        <h4>Escalade</h4>
          <p>L’escalade intérieur est un sport qui requiert de la concentration, de la force 
            et de la flexibilité. C’est un bel exercice à proposer aux enfants, à l’abri des intempéries! </p>
          <p>Place restante: 3/8</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
        <div className="mydiv2"><img src={gardening} alt="femmes" className="img2"/>
        <h4>Jardins Communautaires</h4>
          <p>Passer du temps d
            ans le jardin à s'occuper des plantes et à cultiver notre propre nourriture nous
            fait  apprendre de nouvelles compétences, s'amuser, jouer et développer la confiance en soi.
            Cela est parfait pour vos enfants</p>
          <p>Place restante: 2/30</p>
          <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
        </div>
       
      </div> 
              </p>
          )}
          
      </div>
  );
}

export default ShowTable;