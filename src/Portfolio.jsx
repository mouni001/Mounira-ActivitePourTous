import React,{ useState } from 'react';
import {  Link } from "react-router-dom";
import cuisine from './assets/ado.jpg'
import ShowTable from "./ShowTable";
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
import happypeople from './assets/happypeople.jpg'
function Portfolio() {
	const [description, setDescription] = useState(false);
	const [reviews, setReviews] = useState(false);
	const descriptionHandler = () => {
		setDescription(true);
		setReviews(false);
	};
	const reviewsHandler = () => {
		setDescription(false);
		setReviews(true);
	};
	return (
    <>
		<div className="containerbutton" style={{ backgroundImage: `url(${happypeople})`,
    backgroundRepeat: 'no-repeat',

 
   }}>
    <div className="activitytitle">
      <h1 >QUOI FAIRE?</h1>
    <h3 > Inscrivez-vous à une activité de votre choix</h3>
    <p>Vous avez la possibilité de voir les activités en portfolio ou en tableau.</p>
			<button type="button" class="btn btn-dark" onClick={descriptionHandler}>
				Voir en Portfolio</button>
        
			<button  type="button" class="btn btn-dark" onClick={reviewsHandler}>
				Voir en Tableau</button>
        </div>
        </div>
        <div className="container" >
			{description && (
				<ShowTable/>
			)}
			{reviews && (
        <div className="container d-flex justify-content-center mt-100 mb-100">
				<table id="customers">
                <tr>
                  <td>
                  <img src={poterie} alt="personne" className="imgage"/>
                  <h4 className="bold">Atelier de poterie</h4>
                  <p>Catégorie Femme</p>
          <p>« …Crée de tes mains ! Et tout à l’intérieur de toi se transformera!… » Elena Barnabé</p>
          <p>Les cours de poterie  s'adressent à tous les niveaux, même 
            débutants. La séance comprend une initiation à toutes les étapes de la poterie</p>
                  </td>
                  <td>Place restante: 2/20</td>
                  <td> 
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={peinture} alt="Famille" className="imgage"/>
                  <h4>Atelier de peinture</h4>
                  <p className="bold">Catégorie Femme</p>
                  <p>Des petites classes guidées par des artistes professionnels fournissent
             aux étudiants le cadre idéal pour poursuivre leur passion</p>
                  
                  </td>
                  <td>  Place restante: 5/10</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={gardening} alt="femmes" className="imgage"/>
                    <h4>Jardins communautaires</h4>
                    <p className="bold">Catégorie Femme</p>
                    <p>Passer du temps d
            ans le jardin à s'occuper des plantes et à cultiver notre propre nourriture nous
            fait  apprendre de nouvelles compétences, s'amuser, jouer et développer la confiance en soi.</p>
                  </td>
                  <td><p>Place restante: 2/30</p></td>
                  <td> 
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
                  </td>
                </tr>
                <tr>
                  <td><img src={aqua} alt="personne" className="imgage"/>
                  <h4>Aquaform</h4>
                  <p className="bold">Catégorie Aînés</p>
                  <p>Nous proposons des cours de natation privés et collectifs pour les nageurs.</p>
          <p>Pour rendre notre piscine accessible et accueillante pour un 
            large éventail de nageurs handicapés, notre piscine possède un certain nombre de caractéristiques uniques.</p>
                  </td>
                  <td>Place restante: 9/15</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={yoga} alt="Famille" className="imgage"/>
                  <h4>Yoga pleine air</h4>
                  <p className="bold">Catégorie Aînés</p>
                  <p>Cours de yoga pour tous, initiation au yoga, 
            hatha, Yin Yoga vinyasa, boutique, méditation. Vivez Une Expérience Mémorable
             Dans Un Espace De Ressourcement Exceptionnel. Tous Les Niveaux. Réservations Disponibles. Prendre Soin De Vous.</p>
                  </td>
                  <td>Place restante: 6/30</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={art2} alt="femmes" className="imgage"/>
                    <h4>Activités de natation</h4>
                    <p className="bold">Catégorie Aînés</p>
                    <p>Excellents enseignants en peinture à l’huile et l'acrylique, aquarelle et dessin. Plusieurs cours de peinture 
            et de dessin pour tous les âges et tous les niveaux. </p>
                  </td>
                  <td>Place restante: 2/30</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td> <img src={poterie} alt="personne" className="imgage"/>
                  <h4 >Atelier de poterie</h4>
                  <p className="bold">Catégorie Famille</p>
          <p>« …Crée de tes mains ! Et tout à l’intérieur de toi se transformera!… » Elena Barnabé</p>
          <p>Les cours de poterie  s'adressent à tous les niveaux, même 
            débutants. La séance comprend une initiation à toutes les étapes de la poterie</p>
                  </td>
                  <td>Place restante: 2/20</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={peinture} alt="Famille" className="imgage"/>
                  <h4>Atelier de peinture</h4>
                  <p className="bold">Catégorie Famille</p>
          <p>Des petites classes guidées par des artistes professionnels fournissent
             aux étudiants le cadre idéal pour poursuivre leur passion</p>
                  </td>
                  <td>Place restante: 5/10</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={gardening} alt="femmes" className="imgage"/>
                  <h4>Jardins Communautaires</h4>
                  <p className="bold">Catégorie Famille</p>
          <p>Passer du temps d
            ans le jardin à s'occuper des plantes et à cultiver notre propre nourriture nous
            fait  apprendre de nouvelles compétences, s'amuser, jouer et développer la confiance en soi.</p>
                  </td>
                  <td>Place restante: 2/30</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td> <img src={velo} alt="personne" className="imgage"/>
                  <h4>Groupe de vélo </h4>
                  <p className="bold">Catégorie Hommes</p>
          <p>Joignez-vous à un club cycliste! Sorties de groupe 
            et  conseils techniques pour progresser font partie de l'offre.</p>
                  </td>
                  <td>Place restante:: 2/20</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={escalade} alt="Famille" className="imgage"/>
                  <h4>Escalade</h4>
                  <p className="bold">Catégorie Hommes</p>
          <p>L’escalade extérieur est un sport qui requiert de la concentration, de la force 
            et de la flexibilité. C’est un bel exercice pour construire votre endurance physique </p>
                  </td>
                  <td>Place restante: 3/8</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={cuisinehomme} alt="personne" className="imgage"/>
                  <h4>Atelier de cuisine</h4>
                  <p className="bold">Catégorie Hommes</p>
          <p>La cuisine est un art, qui est facile à apprendre et avec les bons outils, 
            vous aussi pouvez devenir un chef. Nous vous aidons à atteindre l'excellence</p>
                  </td>
                  <td>Place restante: 2/20</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td> <img src={velo} alt="personne" className="imgage"/>
                  <h4>Groupe de vélo </h4>
                  <p className="bold">Catégorie Adolescents</p>
          <p>Joignez-vous à un club cycliste! Sorties de groupe 
            et  conseils techniques pour progresser font partie de l'offre.</p>
                  </td>
                  <td>Place restante: 2/20</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={artado} alt="Famille" className="imgage"/>
                  <h4>Atelier de peinture</h4>
                  <p className="bold">Catégorie Adolescents</p>
          <p>Des petites classes guidées par des artistes professionnels fournissent
             aux étudiants le cadre idéal pour poursuivre leur passion</p>
                  </td>
                  <td><p>Place restante: 5/10</p></td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={escalade} alt="Famille" className="imgage"/>
                  <h4>Escalade</h4>
                  <p className="bold">Catégorie Adolescents</p>
          <p>L’escalade extérieur est un sport qui requiert de la concentration, de la force 
            et de la flexibilité. C’est un bel exercice pour construire votre endurance physique </p>
                  </td>
                  <td>Place restante: 3/8</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td> <img src={peinture2} alt="femmes" className="imgage"/>
                  <h4>Atelier de peinture</h4>
                  <p className="bold">Catégorie Enfants</p>
          <p>Excellents enseignants en peinture à l’huile et l'acrylique, aquarelle et dessin. Plusieurs cours de peinture 
            et de dessin pour les enfants tous les niveaux. </p>
                  </td>
                  <td>Place restante: 2/30</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
                <tr>
                  <td><img  src={ESCALADEC} alt="Famille" className="imgage"/>
                  <h4>Escalade</h4>
                  <p className="bold">Catégorie Enfants</p>
          <p>L’escalade intérieur est un sport qui requiert de la concentration, de la force 
            et de la flexibilité. C’est un bel exercice à proposer aux enfants, à l’abri des intempéries! </p>
                  </td>
                  <td>Place restante: 3/8</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
                  </td>
                </tr>
                <tr>
                  <td><img src={gardening} alt="femmes" className="imgage"/>
                  <h4>Jardins Communautaires</h4>
                  <p className="bold">Catégorie Enfants</p>
                  <p >Passer du temps d
            ans le jardin à s'occuper des plantes et à cultiver notre propre nourriture nous
            fait  apprendre de nouvelles compétences, s'amuser, jouer et développer la confiance en soi.
            Cela est parfait pour vos enfants</p>
                  </td>
                  <td>Place restante: 2/30</td>
                  <td>
                  <Link to ="/Reservation" type="button" class="btn btn-light">Réservez votre place</Link>
          <Link to="/Commentaire" type="button" class="btn btn-light">Laissez nous votre commentaire</Link>
      
                  </td>
                </tr>
              </table>
              </div>
			)}
      </div>
		</>
	);
}

export default Portfolio;
