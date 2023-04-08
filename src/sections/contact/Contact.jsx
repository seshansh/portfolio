import "./Contact.css"
import Card from '../../components/Card'
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <Card>
      <section id='contact'><h2>Contact</h2>
      <div className="contact-way">
      <a className="contact-me" href="seshanshk123@gmail.com"> <SiGmail size="6rem" color="red"/> </a>
      <a className="contact-me" href="https://www.linkedin.com/in/seshansh"><AiFillLinkedin size="6rem" color="blue"/></a>
      <a className="contact-me" href="tel:8969138966"><BiPhoneCall size="6rem" color="green"/></a>
      <a className="contact-me" href="https://github.com/seshansh?tab=repositories"><BsGithub size="6rem" color="black"/></a>

      </div>
      
      </section>
    </Card>
  )
}

export default Contact;