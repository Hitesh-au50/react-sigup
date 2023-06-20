import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
const Input = () => {
  return (
    <div className='container w-50' id='contain'>

    <div id='inner'>

     <h1>Signup</h1>

<hr />

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='naam'>Name:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='email'>Email:</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='phone'>Phone:</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='address'>Address:</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='password'>Password:</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <hr />
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>


    </div>
  )
}

export default Input
