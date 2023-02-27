import React from 'react'
import './ProjectItem.css'

function ProjectItem(props) {
  return (
        <div className="project">
        <div className="project-img">
           <img src={props.Img} alt="project-img"></img>
        </div>
        <div className="project-heading">
         <h3>{props.Name}</h3>
        </div>
        <div className="project-description">
        <p>{props.Description}</p> 
        </div>
    </div>
  )
}

export default ProjectItem