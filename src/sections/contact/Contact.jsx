import "./Contact.css"
import Card from '../../components/Card'
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";


const Contact = () => {
  return (
    <Card>
      <section id='contact'><h2>Contact</h2>
      <div className="contact-way">
      <a className="contact-me" href="mailto:seshanshk123@gmail.com"  target="_blank" rel="noreferrer"> <SiGmail size="6rem" color="red"/> </a>
      <a className="contact-me" href="https://www.linkedin.com/in/seshansh" target="_blank" rel="noreferrer"><AiFillLinkedin size="6rem" color="blue"/></a>
      <a className="contact-me" href="tel:8969138966" target="_blank" rel="noreferrer"><BiPhoneCall size="6rem" color="green"/></a>
      <a className="contact-me" href="https://wa.me/918969138966?text=Hi Seshansh!" target="_blank" rel="noreferrer"><BsWhatsapp size="6rem" color="green"/></a>

      </div>
      
      </section>
    </Card>
  )
}

export default Contact;