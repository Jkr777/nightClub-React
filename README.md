

* about:
  - To run this project you need to change process.env.CLUB_API (./src/services/axios.js) with your environment variable or url. 
  - You need to use your AWS S3 link here ('./src/containers/App.js').
  - I created this project using create-react-app tool.
  - I used react lifecycle methods to handle custom functionality that gets executed during the different phases of a component.
  - I used react props system to pass data through components.
  - I run this project in heroku using a buildpack, --buildpack https://github.com/mars/create-react-app-buildpack.git.
  - I used AWS S3 service to store an image. 

* dependencies:
    - "@material-ui/core" // a React UI framework
    - "@material-ui/icons" // React Material icons 
    - "axios" // used to handle server req
    - "react-reveal" // an animation framework for React
    - "react-router-dom" // used to navigate between different components.
    - "react-scroll" // a component for animating vertical scrolling
    - "react-slick" // a carousel component built with React. 
