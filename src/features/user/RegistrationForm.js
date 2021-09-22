import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
// import { RegistrationData } from '../../app/datas/RegistrationData'

export default function RegistrationForm(RegistrationData) {
  return (
    <Form>
      <Form.Group required as={Row} className='mb-3'>
        <Form.Label column sm={2}>
          {RegistrationData.title}
        </Form.Label>
        <Col sm={10}>
          <Form.Control type='text' placeholder='Customer' />
        </Col>
      </Form.Group>
      <Form.Group required as={Row} className='mb-3'>
        <Form.Label column sm={2}>
          Contact number
        </Form.Label>
        <Col sm={10}>
          <Form.Control type='text' placeholder='Contactno' />
        </Col>
      </Form.Group>
      <Form.Group required as={Row} className='mb-3'>
        <Form.Label column sm={2}>
          Company
        </Form.Label>
        <Col sm={10}>
          <Form.Control type='text' placeholder='company' />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3' controlId='formHorizontalPassword'>
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type='password' placeholder='Password' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='mb-3'>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type='submit'>Next</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}
