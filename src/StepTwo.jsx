import React, { useState } from 'react';
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [errorAge, setErrorAge] = useState(false);
  const [errorActivity, setErrorActivity] = useState(false);
  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})
  const findFormErrors = () => {
    const { personne } = form
  const newErrors = {}
  if ( ! personne < 1 ) newErrors.personne = 'Doit attribuer un nombre plus grand que 0!'
  return newErrors
}

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    const newErrors = {}
    const { age } = form
     // checking if value of first name and last name is empty show error else take to next step
     if (
      validator.isEmpty(values.age) || validator.isEmpty(values.activity) 
    ) {
      if(validator.isEmpty(values.age)){
        setErrorAge(true);
      }
      if(validator.isEmpty(values.activity)){
        if ( ! age < 1 ) newErrors.age = 'Doit attribuer un nombre plus grand que 0!'
        setErrorActivity(true);
      }
      
    } else {
      nextStep();
    }
  };

  return (
    <div style={{
      backgroundColor:'green',
      boxShadow:'10px 10px 8px 12px  	rgb(232,232,232)',
      
    }}>
      <Card style={{ marginTop: 50,
      borderRadius:15,
      padding:20 }}>
        <h2>Information sur l'activité</h2>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de participants</Form.Label>
              <Form.Control
               isInvalid={ !!errors.personne }
                style={{ border: errorAge ? "2px solid red" : "" }}
                type="number"
                placeholder="Nombre de participants"
                onChange={handleFormData("age")}
              />
              {errorAge ? (
                <Form.Text style={{ color: "red" }}>
                  Ce champ obligatoire
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
              <Form.Group>
              <Form.Label>Choisir une Activité</Form.Label>
               <select multiple class="form-control" style={{ border: errorActivity ? "2px solid red" : "" }}
                type=""
                placeholder="activity"
                onChange={handleFormData("activity")}>
                  <option className="desabled"disabled>Catégorie Femmes</option>
                  <option>Atelier de poterie</option>
                  <option>Atelier de peinture</option>
                  <option>Jardins Communautaires</option>
                  <option className="desabled" disabled>Catégorie Aînés</option>
                  <option>Aquaform</option>
                  <option>Yoga pleine air</option>
                  <option>Atelier d'art</option>
                  <option className="desabled" disabled>Catégorie Famille</option>
                  <option>Atelier de poterie</option>
                  <option>Atelier de peinture</option>
                  <option>Jardins Communautaires</option>
                  <option className="desabled" disabled>Catégorie Hommes</option>
                  <option>Groupe de vélo</option>
                  <option>Escalade</option>
                  <option>Atelier de cuisine</option>
                  <option className="desabled" disabled>Catégorie Adolescent</option>
                  <option>Groupe de vélo</option>
                  <option>Atelier de peinture</option>
                  <option>Escalade</option>
                  <option className="desabled" disabled>Catégorie Enfants</option>
                  <option>Atelier de peinture</option>
                  <option>Escalade</option>
                  <option>Jardins Communautaires</option>
                
      
                  </select>
    
               
              {errorActivity ? (
                <Form.Text style={{ color: "red" }}>
                  Selectionnez une activité
                </Form.Text>
              ) : (
                ""
              )}
            
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop:30 }}>
              <Button className="btn btn-dark" onClick={prevStep}>
                Prochain
              </Button>
              <p className="pageindicator">1  <span className="preserv">2</span></p>
              <Button className="btn btn-dark"type="submit">
                Soumettre
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepTwo;