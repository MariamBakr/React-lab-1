
import './App.css';
import About_Me from './components/About_me';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Profile_Pic from './components/Profile_Pic';
import Skills from './components/Skills';
import Title from './components/Title';

function App() {
  return (
    <div className="App border border-5 row container-fluid ">
    
      <Title/>
      <About_Me/>
      <Profile_Pic/>
      <Education/>
      <Contact/>
      <Experience/>
      <Skills/>

    </div>
  );
}

export default App;
