import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import React, {textarea, useState} from 'react'
import Button from 'react-bootstrap/Button';
const Section = () => {
    const [ form, setForm ] = useState({})
const [ errors, setErrors ] = useState({})

const findFormErrors = () => {
    const { name, food, rating, comment } = form
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    else if ( name.length > 30 ) newErrors.name = 'name is too long!'
    // food errors
    if ( !food || food === '' ) newErrors.food = 'select a food!'
    // rating errors
    if ( !rating || rating > 5 || rating < 1 ) newErrors.rating = 'must assign a rating between 1 and 5!'
    // comment errors
    if ( !comment || comment === '' ) newErrors.comment = 'cannot be blank!'
    else if ( comment.length > 100 ) newErrors.comment = 'comment is too long!'

    return newErrors
}

const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!')
    }
  }
const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if ( !!errors[field] ) setErrors({
        ...errors,
        [field]: null
      })
  }
    return (
      <div className='App d-flex flex-column align-items-center'>
        <h1>How was your dinner?</h1>
        <Form style={{ width: '300px' }}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text'
            onChange={ e => setField('name', e.target.value) }
            isInvalid={ !!errors.name }/>
             <Form.Control.Feedback type='invalid'>
        { errors.name }
    </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Food?</Form.Label>
            <Form.Control as='select'>
              <option value=''>Select a food:</option>
              <option value='chicken parm'>Chicken Parm</option>
              <option value='BLT'>BLT</option>
              <option value='steak'>Steak</option>
              <option value='salad'>Salad</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control type='number'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control as='textarea'/>
          </Form.Group>
          <Button type='submit' onClick={handleSubmit}>Submit Review</Button>
        </Form>
      </div>
    )
  }
  export default Section