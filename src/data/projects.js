const projects = [
  {
    id: "event",
    name: "Create Event",
    link: "http://seizetheparty.events/#/",
    github: "https://github.com/emeliesidesio/ema",
    image: "event-screen.png",
    description: "For the final project of my 12-weeks long BootCamp my project team decided to create a service where you can create events, invite your friends and also keep track of RSVP. " +
      "The purpose was to make use of all the things that we had learned thoughout the course. " +
      "We built our own backend with MongoDB and Mongoose and designed and built the frontend in React. We implemented " +
      "the service Sendgrid to be able to actually send invites to guests.",
    language: "React, JavaScript, HTML5, CSS, Node"
  }, {
    id: "grid",
    name: "CSS-Grid",
    link: "https://mariejohanna.github.io/CSS-Grid/",
    github: "https://github.com/MarieJohanna/CSS-Grid",
    image: "cssgrid-screen.png",
    description: "Using CSS-grid to create to create the structure of boxes and then style each box with its different features such as images, different font size and structure.",
    language: "React, JavaScript, HTML5, CSS"
  }, {
    id: "habit-tracker",
    name: "Habit Tracker",
    link: "https://mariejohanna.github.io/Habit-Tracker",
    github: "https://github.com/MarieJohanna/Habit-Tracker",
    image: "habit-tracker2.png",
    description: "As a group project we decided to build a habit tracker for children who require a more structured everyday life. We have facilited the view and user interaction with designated color for each weekday.",
    language: "React, JavaScript, HTML5, CSS"
  }, {
    id: "sveriges-radio",
    name: "Sveriges Radio",
    link: "https://mariejohanna.github.io/Sveriges-radio/",
    github: "https://github.com/MarieJohanna/Sveriges-radio",
    image: "radio-screen.png",
    description: "Using Sverige's radio's API to create a page where you can listen to the radio station provided by public service. In the scroll down menu you can you choose the station you like.",
    language: "React, Javascript, HTML5, CSS"
  }, {
    id: "api-weather",
    name: "Check the weather in..",
    link: "https://mariejohanna.github.io/check-weather/",
    github: "https://github.com/MarieJohanna/check-weather",
    image: "weather.jpg",
    description: "The website calls an API to check current weather in different preset cities",
    language: "HTML5, CSS, JavaScript"
  }, {
    id: "css-santa",
    name: "CSS-Santa",
    link: "https://santagodjul.netlify.com/",
    github: "https://github.com/MarieJohanna/CSS-Santa",
    image: "santacss-screen.png",
    description: "Just before Christmas we had a small competition to create a Santa only using HTML and CSS. I decided to try to use CSS-grid and create reusable classes to style my Santa.",
    language: "HTML5, CSS"
  }, {
    id: "advent-calendar",
    name: "Advent Calendar",
    link: "https://cookiekalender.netlify.com/code/",
    github: "https://github.com/MarieJohanna/advent-calendar",
    image: "kalendar-screen.png",
    description: "Design and build an Advent Calendar with a new page for each until Christmans Eve. This was a group project in colaboration with Kivra.",
    language: "HTML5, CSS, JavaScript"
  }, {
    id: "VAT-Calc",
    name: "VAT Calculator",
    link: "https://mariejohanna.github.io/VAT-Calc/",
    github: "https://github.com/MarieJohanna/VAT-Calc",
    image: "VAT-calc-screen.png",
    description: "A simple VAT Calculator that updates from both from including VAT and excluding VAT.",
    language: "React, Javascript, HTML5, CSS"
  }
]

export const getAll = () => projects

export const getById = id => {
  const project = projects.find(project => project.id === id)
  if (!project) {
    return null
  }
  return Object.assign({}, project)
}

export default { projects, getAll, getById }
