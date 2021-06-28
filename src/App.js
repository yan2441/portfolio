
import './App.css';
import NavBar from './components/navbar';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
