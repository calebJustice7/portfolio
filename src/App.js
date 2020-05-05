import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Welcome from './components/welcome';
import './components/main.css';
import AboutMe from './components/About-me';
import Projects from './components/Projects';

class App extends React.Component {

  componentDidMount() {
    Aos.init({ duration: 1500 });
  }

  render(){
    return (
      <div className="project-wrapper">
      <div className="main-wrapper">
        <Welcome />

        <div data-aos="fade-up-right">
          <AboutMe />
        </div>

        <div className="projects-wrapper">
          <div data-aos="fade-down-left">
            <Projects />
          </div>
        </div>

        <h1>Footer</h1>
      </div>
      </div>
    )
  }
}

export default App;
