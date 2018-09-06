import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><h4><Link to="/" className="nav-link">Home</Link></h4></li>
            <li><h4><a href="/#about" className="nav-link">About</a></h4></li>
            <li><h4><Link to="/resume" className="nav-link">Resume</Link></h4></li>
            <li><h4><a href="/#contact" className="nav-link">Contact</a></h4></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
