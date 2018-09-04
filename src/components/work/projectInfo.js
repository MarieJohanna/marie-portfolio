import React from "react"
import { Link } from "react-router-dom"
import Header from "./../header/header"
import Footer from "./../footer/footer"
import projects from "../../data/projects"
import "./work.css"

class ProjectInfo extends React.Component {

  render() {
    const project = projects.getById(this.props.match.params.id)
    const allProjects = projects.getAll()
    const index = allProjects.findIndex(item => item.id === this.props.match.params.id)

    let nextProject
    if (index === allProjects.length - 1) {
      nextProject = allProjects[0].id
    } else {
      nextProject = allProjects[index + 1].id
    }

    let previousProject
    if (index === 0) {
      previousProject = allProjects[allProjects.length - 1].id
    } else {
      previousProject = allProjects[index - 1].id
    }

    console.log(allProjects, index, nextProject)
    return (
      <div className="project_page" id="projectInfo">
        <Header />
        <div className="wrapper">
          <div className="project_info">
            <div className="project_info_copy">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><i>{project.language}</i></p>
              <span className="project_links">
                <h5><a href={project.link} target="_blank">Demo</a></h5>
                <h5><a href={project.github} target="_blank">Gitbub</a></h5>
              </span>
            </div>
            <div className="project_info_image">
              <img src={require(`./project-images/${project.image}`)} alt={this.props.name} />
            </div>
          </div>
          <div className="navigation_projects">
            <Link to={`/projects/${previousProject}`} ><p>&#x3c;</p></Link>
            <Link to="/" ><p>Home</p></Link>
            <Link to={`/projects/${nextProject}`} ><p>&#x3e;</p></Link>
          </div>
        </div>
        <Footer />
      </div>

    )
  }

}

export default ProjectInfo
