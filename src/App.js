
import './App.css';
import NavBar from './components/navbar';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact/> 
    </div>
  );
}

export default App;
