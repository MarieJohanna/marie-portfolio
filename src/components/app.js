import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Home from "./home/home"
import Resume from "./resume/resume"
import ProjectInfo from "./work/projectInfo"

class App extends React.Component {

  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route path="/" component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/projects/:id" component={ProjectInfo} />
          </div>
        </HashRouter>
      </div>
    )
  }

}

export default App
