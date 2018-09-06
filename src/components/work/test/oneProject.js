import React from "react"
import { Link } from "react-router-dom"
import projects from "./../../../data/projects"
import "./../work.css"

class OneProject extends React.Component {

  render() {
    // const project = projects.getById(this.props.match.params.id)
    const allProjects = projects.getAll()
    const index = allProjects.findIndex(item => item.id === this.props.id)

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
        <div className="wrapper">
          <div className="project_info">
            <div className="project_info_copy">
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
              <p><i>{this.props.language}</i></p>
              <span className="project_links">
                <h5><a href={this.props.link} target="_blank">Demo</a></h5>
                <h5><a href={this.props.github} target="_blank">Gitbub</a></h5>
              </span>
            </div>
            <div className="project_info_image">
              <img src={require(`./../project-images/${this.props.image}`)} alt={this.props.name} />
            </div>
          </div>
          {/* <div className="navigation_projects">
            <Link to={`/projects/${previousProject}`} ><p>&#x3c;</p></Link>
            <Link to="/" ><p>Home</p></Link>
            <Link to={`/projects/${nextProject}`} ><p>&#x3e;</p></Link>
          </div> */}
        </div>
      </div>

    )
  }

}

export default OneProject
