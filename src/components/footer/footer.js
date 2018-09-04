import React from "react"
import git from "./../../data/images/github.png"
import linkedin from "./../../data/images/linkedin.svg"
import "./footer.css"

class Footer extends React.Component {

  render() {
    return (
      <footer id="contact">
        <span>
          <h3>Send a note</h3>
          <p>mariejohannanilsson@gmail.com</p>
        </span>

        <span>
          <a href="https://github.com/mariejohanna"><img src={git} alt="" /></a>
          <a href="https://www.linkedin.com/in/mariejohannanilsson/"><img src={linkedin} alt="" /></a>
        </span>

        <span className="copy">
          <h6>Copyright &copy; Marie Johanna</h6>
          <h6>Website by Marie Johanna</h6>
        </span>

      </footer>
    )
  }
}

export default Footer
