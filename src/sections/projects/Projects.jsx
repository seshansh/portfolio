import React from 'react'
import ProjectShowcase from '../../components/projectShowcase/ProjectShowcase'
import "./Projects.css"
import {projectData} from '../../components/projectShowcase/projectData'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* <ProjectShowcase/> */}
      {
        projectData.map(singleProject => <ProjectShowcase key={singleProject.id} code={singleProject.code} projectName={singleProject.name} aboutProject={singleProject.aboutProject} imageSrc={singleProject.imageSrc} techUsed={singleProject.techUsed} learned={singleProject.learned} live={singleProject.live}/>)
      }
      {/* <ProjectShowcase/>
      <ProjectShowcase/>
      <ProjectShowcase/>
      <ProjectShowcase/> */}
    </section>
  )
}

export default Projects