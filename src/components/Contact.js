import ContactForm from "./ContactForm";
import "./contact.css";
import {GrContact} from 'react-icons/gr'


const Contact = () => {
    return ( 
        <div class="contact" id="contact">
         <h2 class="contact-form-title"><GrContact/> Contact </h2>
        <ContactForm />
        </div>

     );
}
 
export default Contact;