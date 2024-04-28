import Aboutme from './AboutMe/Aboutme';
import Experience from './Experience/Experience';
import MainPage from './MainPage/MainPage';
import Navbar from './Navbar';

function App() {
  return (
    
    <div className="min-h-screen  bg-gradient-to-bl from-bg_color_1 to-bg_color_3 via-bg_color_2 overflow-hidden">
      <Navbar/>
      <MainPage/>
      <Aboutme/>
      <Experience/>
    </div>
  );
}

export default App;
