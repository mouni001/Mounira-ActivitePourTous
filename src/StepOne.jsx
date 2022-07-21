import React, { useState } from 'react';
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [errorFirst, setErrorFirst] = useState(false);
  const [errorLast, setErrorLast] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) || validator.isEmpty(values.lastName) || validator.isEmpty(values.email)
    ) {
      if(validator.isEmpty(values.firstName)){
        setErrorFirst(true);
      }
      if(validator.isEmpty(values.lastName)){
        setErrorLast(true);
      }
      if(validator.isEmpty(values.email)){
        setErrorEmail(true);
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
      <h2>Information Personnelle</h2>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                style={{ border: errorFirst ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="Prénom"
                onChange={handleFormData("firstName")}
              />
              {errorFirst ? (
                <Form.Text style={{ color: "red" }}>
                  Ce est un champ obligatoire
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nom de Famille</Form.Label>
              <Form.Control
                style={{ border: errorLast ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Nom de Famille"
                onChange={handleFormData("lastName")}
              />
              {errorLast ? (
                <Form.Text style={{ color: "red" }}>
                  Ce champ obligatoire
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Adresse Couriel</Form.Label>
              <Form.Control
                style={{ border: errorEmail ? "2px solid red" : "" }}
                type="email"
                placeholder="Adresse Couriel"
                onChange={handleFormData("email")}
              />
              {errorEmail ? (
                <Form.Text style={{ color: "red" }}>
                  Ce champ obligatoire
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button className="btn btn-dark" type="submit">
              Prochaine étape
            </Button>
            <p className="pageindicator"><span className="preserv">1</span>   2</p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;