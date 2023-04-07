import "./Skills.css"
import SkewedCard from "../../components/skewedCard/SkewedCard"
import {data} from "./data"



const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skillContainer">
      {
        data.map(singleData => <SkewedCard key={singleData.id} name={singleData.name} skillRating={singleData.skillRating} imageSrc={singleData.imageSrc}/>)
      }
      </div>
    </section>
    )
}

export default Skills