
import './App.css';
import NavBar from './components/navbar';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
