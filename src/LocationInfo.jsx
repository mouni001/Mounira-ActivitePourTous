import React from "react";
import { Form} from "react-bootstrap";

const LocationInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Choisir une activité</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("Activité")}
          name="Activité"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Female</option>
          <option>Female</option>
          <option>Female</option>
          <option>Female</option>
          <option>Female</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default LocationInfo;
