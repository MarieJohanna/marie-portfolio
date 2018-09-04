import React from "react"
import { Link } from "react-router-dom"
import "./work.css"

class Project extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.id}`} className="container_project_wrap">
        <div className="container_project">
          <img src={require(`./project-images/${this.props.image}`)} alt={this.props.name} />
          {/* <div className="front" style={{ backgroundImage: `url(${this.props.image})` }} > */}
          {/* <h2>{this.props.name}</h2>
          <p>{this.props.language}</p> */}
        </div>
      </Link>
    )
  }
}

export default Project
