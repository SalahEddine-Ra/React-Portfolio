import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
