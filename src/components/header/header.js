import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

class Header extends React.Component {

  scrollToLocation = () => {
    const { hash } = window.location
    if (hash !== "") {
      let retries = 0
      const id = hash.replace("#", "")
      const scroll = () => {
        retries += 0
        if (retries > 50) return
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0)
        } else {
          setTimeout(scroll, 100)
        }
      }
      scroll()
    }
  }

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
