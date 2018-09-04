import React from "react"
import sunset from "./../../data/images/sunset3.jpg"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div id="about" className="container_about" style={{ backgroundImage: `url(${sunset})` }}>
        <h2>About Me</h2>
        <div className="container_about_below">
          <p>My name is Marie and I&lsquo;m a web developer and digital transformation consultant.
              I have a business degree from Linköping University and started my career
              in Financial and Treasury management.
            <br />
            <br />
            Since graduating from Technigo&lsquo;s web development bootcamp
              I strive to combine my previous experince with my recently acquired knowledge.
            <br />
            <br />
            I love travelling, meeting new people and I have a serious weakness for Ice cream.
          </p>
        </div>
      </div>
    )
  }

}

export default About
