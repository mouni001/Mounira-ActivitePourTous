import React, {textarea, useState} from 'react'
import pkg from 'semantic-ui-react/package.json'
import female from './assets/female.png'
import male from './assets/male.png'

import { Dropdown } from 'semantic-ui-react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaPencilAlt, GrRotateRight, FaHeart} from "react-icons/fa";
import Home from './Home'
import i18next from 'i18next'
import './style.css'
import { useTranslation } from 'react-i18next'
import { comment } from 'postcss'
import {  Link } from "react-router-dom";






const Commentaire = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation()

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})
  
  const findFormErrors = () => {
      const { name, food, rating, comment } = form
      const newErrors = {}
      // name errors
      if ( !name || name === '' ) newErrors.name = 'Ne peut être vide!'
      else if ( name.length > 30 ) newErrors.name = 'Nom trop long!'
      // food errors
      if ( !food || food === '' ) newErrors.food = 'Sélectionnez une activité!'
      // rating errors
      if ( !rating || rating > 5 || rating < 1 ) newErrors.rating = 'Doit attribuer un nombre entre 1 et 5!'
      // comment errors
      if ( !comment || comment === '' ) newErrors.comment = 'Ne peut être vide!'
      else if ( comment.length > 100 ) newErrors.comment = 'Comment is too long!'
  
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
        setShow(true);
        
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
    <div>
      <div className="container d-flex justify-content-center mt-100 mb-100"
    >
      <div class="row" style={{
       
       boxShadow:'10px 10px 8px 12px black',
       
     }}>
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"> {t('top_bar_title')}</h4>
              <h6 class="card-subtitle">{t('commentaire_recent')}</h6> 
            </div>
            <div class="comment-widgets m-b-20">
            <div class="d-flex flex-row comment-row">
                <div class="p-2"><span class="round"><img src={female} alt="user" width="50"/></span></div>
                <div class="comment-text w-100">
                    <h5>Samso Nagaro</h5>
                    <div class="comment-footer">
                        <span class="date">{t('date1')}</span>
                        <span class="label label-info">{t('pending1')}</span> <span class="action-icons">
                                <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">{t('comment1')}</p>
                </div>
            </div>
            <div class="d-flex flex-row comment-row ">
                <div class="p-2"><span class="round"><img src={male} alt="user" width="50"/></span></div>
                <div class="comment-text active w-100">
                    <h5>Jonty Andrews</h5>
                    <div class="comment-footer">
                        <span class="date">{t('date2')}</span>
                        <span class="label label-success">{t('pending2')}</span> <span class="action-icons active">
                        <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">{t('comment2')}</p>
                </div>
            </div>
            <div class="d-flex flex-row comment-row">
                <div class="p-2"><span class="round"><img src={female} alt="user" width="50"/></span></div>
                <div class="comment-text w-100">
                    <h5>Sarah Tim</h5>
                    <div class="comment-footer">
                        <span class="date">{t('date3')}</span>
                        <span class="label label-success">{t('pending3')}</span> <span class="action-icons active">
                        <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">{t('comment3')}</p>
                </div>
            </div>
            <div class="d-flex flex-row comment-row">
                <div class="p-2"><span class="round"><img src={male} alt="user" width="50"/></span></div>
                <div class="comment-text w-100">
                    <h5>Samso Nagaro</h5>
                    <div class="comment-footer">
                        <span class="date">{t('date4')}</span>
                        <span class="label label-info">{t('pending4')}</span> <span class="action-icons">
                        <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">{t('comment4')} </p>
                </div>
            </div>
            </div>
            </div>
            </div>
    
            
          </div>
          <div className='App d-flex flex-column align-items-center' style={{
          backgroundColor:'white',
          boxShadow:'10px 10px 8px 12px black',
          
        }}>
        <h1>{t('card-title')}</h1>
        <Form style={{ width: '300px' }}>
          <Form.Group>
            <Form.Label>{t('name')}</Form.Label>
            <Form.Control type='text'
            onChange={ e => setField('name', e.target.value) }
            isInvalid={ !!errors.name }/>
             <Form.Control.Feedback type='invalid'>
        { errors.name }
    </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>{t('card-smalltittle')}</Form.Label>
            <Form.Control as='select'  onChange={ e => setField('food', e.target.value) }
            isInvalid={ !!errors.food }>
            <option className="desabled"disabled> {t('desabled1')}</option>
                  <option>{t('option1')}</option>
                  <option>{t('option2')}</option>
                  <option>{t('option3')}</option>
                  <option className="desabled" disabled>{t('desabled2')}</option>
                  <option>{t('option4')}</option>
                  <option>{t('option5')}</option>
                  <option>{t('option6')}</option>
                  <option className="desabled" disabled>{t('desabled3')}</option>
                  <option>{t('option1')}</option>
                  <option>{t('option2')}</option>
                  <option>{t('option3')}</option>
                  <option className="desabled" disabled>{t('desabled4')}</option>
                  <option>{t('option7')}</option>
                  <option>{t('option8')}</option>
                  <option>{t('option9')}</option>
                  <option className="desabled" disabled>{t('desabled5')}</option>
                  <option>{t('option7')}</option>
                  <option>{t('option2')}</option>
                  <option>{t('option8')}</option>
                  <option className="desabled" disabled>{t('desabled6')}</option>
                  <option>{t('option2')}</option>
                  <option>{t('option8')}</option>
                  <option>{t('option3')}</option>
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
        { errors.food }
    </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>{t('starating')}</Form.Label>
            <Form.Control type="number" onChange={ e => setField('rating', e.target.value) }
            isInvalid={ !!errors.rating }>
            </Form.Control>
            
               
        
            <Form.Control.Feedback type='invalid'>
        { errors.rating }
    </Form.Control.Feedback>
           
          </Form.Group>
          <Form.Group>
            <Form.Label> {t('textarea')} </Form.Label>
            <Form.Control as='textarea' onChange={ e => setField('comment', e.target.value) }
            isInvalid={ !!errors.comment }/>
          </Form.Group>
          <Form.Control.Feedback type='invalid'>
        { errors.comment }
    </Form.Control.Feedback>
          <Button type='submit' onClick={handleSubmit}>  {t('bouton')} </Button>
        </Form>
      
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{t('message_title')} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('message')}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" ><Link to="/Commentaire">  {t('other_comment')}</Link>
          </Button>
          <Button variant="dark"><Link to="/"> {t('bouton_accueil')}</Link></Button>
        </Modal.Footer>
      </Modal>
      </div>
      
      </div>


  )
}

export default Commentaire
