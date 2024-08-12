import React ,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert("message sent successfully")
    e.preventDefault();

    emailjs
      .sendForm('service_o3bxw1t', 'template_stq64pr', form.current, {
        publicKey: 'zWpIjI5smJikEg8pM',
      }) 
      
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()

  };

  return (
<div>
      <h2 className='title'>Contact Us</h2>
  <Container className='contact'>
      <div className='my-info'>
        <h4><span>Email:</span> ahmedabs777@gmai.com</h4>
        <h4><span>Phone:</span> 01069160736</h4>
        <h4><span>Address:</span> Egypt-Mansoura</h4>


      </div>
      <div >
      <form  ref={form} onSubmit={sendEmail}>
      <div className='data'>
      <div className='required'>
      <span>*</span>  <input autoComplete='off' required name='name' placeholder='Name' type='text' />
      </div>
      <div className='required'>
      <span>*</span>   <input autoComplete='off' required name='email' placeholder='Email' type='email' />
      </div>
        <input autoComplete='off' name='company' placeholder='Company' type='text' />
    
        <input autoComplete='off' name='phone' placeholder='Phone' type='number' />
        </div>
       <div className='last'>
      <div className='required'>
      <span>*</span> <textarea autoComplete='off' required name='message' placeholder='Message' />
      </div> 
        <button type='submit' className='sub'>Send Message</button>
        </div>
        </form>

      </div>
  </Container>
</div>
)};

export default Contact