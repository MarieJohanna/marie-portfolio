import React from "react"
import OneProject from "./oneProject"
import projects from "./../../../data/projects"
import "./../work.css"

class Pr extends React.Component {

  render() {
    const allProjects = projects.getAll()
    return (
      <div className="container_work">
        <h2>Web development</h2>
        <div className="container_project_collection2">
          {/* <div><h2>Web development</h2></div> */}
          {allProjects.map(item => (
            <OneProject
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              link={item.link}
              github={item.github}
              description={item.description}
              language={item.language} />
          ))}
        </div>
      </div>
    )
  }

}

export default Pr
