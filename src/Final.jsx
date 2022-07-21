import React from 'react';
import { Card } from "react-bootstrap";
import Home from "./Home";

import {  Link } from "react-router-dom";

const Final = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName, age, email, activity } = values;
  return (
    <div style={{
      backgroundColor:'green',
      boxShadow:'10px 10px 8px 12px  	rgb(232,232,232)',
      
    }}>
      <Card style={{ marginTop: 50,
      borderRadius:15,
      padding:20 }}>
        <Card.Body>
          <h2 className="desabled">Votre place est réservé</h2>
          <p>
            <strong>Prénom:</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Nom de Famille :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Nombre de participants :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Activité choisi :</strong> {activity}{" "}
          </p>
          
          <Link to="/" className="btn  btn-dark"> Revenir à la page d'Acceuil</Link>
          <Link to="/Activities" className="btn  btn-dark">Voir les autres activités</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Final;