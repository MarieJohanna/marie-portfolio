import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./home/home"
import Resume from "./resume/resume"
import ProjectInfo from "./work/projectInfo"

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route path="/projects/:id" component={ProjectInfo} />
          </div>
        </BrowserRouter>
      </div>
    )
  }

}

export default App
