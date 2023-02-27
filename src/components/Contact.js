import ContactForm from "./ContactForm";
import "./contact.css";
import {GrContact} from 'react-icons/gr'


const Contact = () => {
    return ( 
        <>
         <h2 class="contact-form-title"><GrContact/> Contact </h2>
        <ContactForm />
        </>

     );
}
 
export default Contact;