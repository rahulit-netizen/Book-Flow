import React , {useState} from 'react'
import { Row , Form , Col , Container , Button } from 'react-bootstrap'

const SendMessages = () => {
  const [mnumber , setnumber] = useState('')
  const [text , settext] = useState('')
  
  

  const submitForm = (e) =>{
     e.preventDefault()
      // Regex expression to remove all characters which are NOT alphanumeric 
      let number = mnumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${number}`;

    // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(text)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
      window.open(url);
  
  }

  return (
    <div>
       

        <Form onSubmit={submitForm} className ='bg-light p-4'>
         
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control type="text"
              value={mnumber}
              onChange={e => setnumber(e.target.value)}
              placeholder="Enter number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control type="text"
              value={text}
              onChange={e => settext(e.target.value)}
              placeholder="Enter text" />
          </Form.Group>

     

      <Button variant="primary" type='submit' >
        Send
      </Button>
    </Form>
    </div>
  )
}

export default SendMessages