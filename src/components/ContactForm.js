// import React, { useRef, useState } from "react";
import React, { useRef } from "react";
// npm install @emailjs/browser
import emailjs from "@emailjs/browser";
// npm i sweetalert --save
import swal from "sweetalert";
// npm install react-google-recaptcha
import ReCAPTCHA from 'react-google-recaptcha';
import Button from 'react-bootstrap/Button';
import "./contact.css";
import {RiBearSmileLine} from 'react-icons/ri'


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 
                     'contact_form', 
                     form.current, 
                     'B0fuwYAe33M0M45Iv'
                     )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();

          swal({
            title: "Success!",
            text: "Thank you! I'll be in touch soon!",
            icon: "success",
            button: "Continue",
          });

      }, (error) => {
          console.log(error.text);
      });
  };



//ReCAPTCHA arrow function

  // const [buttonDisabled, setButtonDisabled] = useState(true) 
  
  
  // const onChange = () => {
  //   setButtonDisabled(false)
  // };

  // const captchaRef = useRef(null)

  return (

    <div class="contact-form">
 
    <form ref={form} onSubmit={sendEmail}>
    <p class="contact-text"><RiBearSmileLine/> Please get in touch!</p>
      <label>Your Name</label>
      <input type="text" name="user_name" id='text-input' placeholder="Please enter your name" required/>
      <label>Your Email</label>
      <input type="email" name="user_email" id='text-input' placeholder='Please enter your email address' required/>
      <label>Message</label>
      <textarea type="text" name="message" cols='30' rows='10' id='text-input'  required/>

      {/* <ReCAPTCHA 
               sitekey='6Lf8FLMkAAAAAJe3O6jUKMnYKG0JS43iHYW8mfkk' 
                 onChange={onChange} 
                 ref={captchaRef}
                 render="explicit"
                //  required
                 /> */}

      {/* <button className="submit-button" type="submit" value="Send" disabled={buttonDisabled}>Send</button> */}
      {/* <button className="submit-button" type="submit" value="Send" >Send</button> */}
      <div class="send-button">
      <button type="submit" class="btn btn-info">Send</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
