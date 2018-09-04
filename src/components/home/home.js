import React from "react"
import Header from "../header/header"
import Name from "../name/name"
import Work from "../work/work"
import About from "../about/about"
import Footer from "../footer/footer"

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Name />
        <Work />
        <About />
        <Footer />
      </div>
    )
  }

}

export default App
