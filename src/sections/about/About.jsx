import React from 'react'
import "./About.css";
// import profile from "../../assets/profile.jpg"
// import sk from "../../assets/sk.jpeg"
import aboutimage from '../../assets/aboutimage.jpeg';
import {IoDownload} from "react-icons/io5";
// import Card from "../../components/Card"
// import  data  from './data';

const About = () => {
  return (
   <section id='about'>
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={aboutimage} alt='about'/>
        </div>
      </div>
      <div className="about__right">
        <h2>About me</h2>
        <div className="about__cards">
          {/* {
            data.map(item => (
              <Card key={item.id} className="about__card">
                <span className='about__cards-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          } */}
        </div>
        <p>
        A Front-end Developer with entry-level experience specializing in web development , user interface design, HTML, CSS,
React-Js. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
        </p>
        <p>I considered myself a quick learner so if you want something from me that I don't know then I'll make sure to learn that in very short amount of time without any special supervision. I'm also good in team work as I have worked in couple of group project in college. 
        </p>
        <a href='https://drive.google.com/file/d/1dQDdgkJn8duhnPfyHvyEaB4zKwnJokR8/view?usp=share_link' className='btn primary' target='_blank'>Download Cv <IoDownload/></a>
      </div>
    </div>
   </section>
  )
}

export default About