import React from "react"
import Container from 'react-bootstrap/Container';
import './components.css';

const Footer = () => {

return (
<footer className="page-footer font-small blue p-2 bg-info mt-4">
   
    <div className="footer-copyright text-center pt-2 pb-1 ">
        This page was created using React and Bootstrap by me
    </div>
    <div className="back-to-top text-right">   
        <a href="#home"><strong>Back to top </strong> </a>
    </div>

</footer>

);}
export default Footer;