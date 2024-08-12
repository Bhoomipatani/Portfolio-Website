import Aboutme from './AboutMe/Aboutme';
import Experience from './Experience/Experience';
import MainPage from './MainPage/MainPage';
import Skills from './Skills/Skills';
import Navbar from './Navbar';
import Education from './Education/Education';
import Projects from './Projects/Projects';
function App() {
  return (
    
    <div className="min-h-screen  bg-gradient-to-bl from-bg_color_1 via-[20%] to-bg_color_3 via-bg_color_2 overflow-hidden">
      <Navbar/>
      <MainPage/>
      <Skills/>
      <Aboutme/>
      <Experience/>
      <Education/>
      {/* <Projects/> */}
    </div>
  );
}

export default App;
