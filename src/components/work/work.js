import React from "react"
import Project from "./project"
import projects from "../../data/projects"
import "./work.css"

class Work extends React.Component {

  render() {
    const allProjects = projects.getAll()
    return (
      <div className="container_work">
        <h2>Web development</h2>
        <div className="container_project_collection">
          {/* <div><h2>Web development</h2></div> */}
          {allProjects.map(item => (
            <Project
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

export default Work

// id: "habit-tracker",
// name: "Habit Tracker",
// link: "https://mariejohanna.github.io/Habit-Tracker",
// image: "https://s26.postimg.org/i8wvr40mx/habit-tracker2.png",
// description: "As a group project we decided to build a habit tracker for children who require a more structured everyday life. We have facilited the view and user interaction with designated color for each weekday.",
// keywords: "React, JavaScript, HTML5, CSS"
