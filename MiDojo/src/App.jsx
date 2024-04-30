import React, { useEffect, useState } from 'react';
import NavBar from './Components/Navbar/NavBar';
import PageOne from './Components/Form/pageOne';
import HomePage from './views/HomePage/HomePage';
import AboutUs from './views/AboutUs/AboutUs';
import FooterSection from './Components/Footer/FooterSection';


function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme]);

  return (  
    <div> 
      <div className={`container-navbar ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />
      </div>

      <HomePage /> 
      <PageOne  />
      <AboutUs />

      <div className={`container-navbar ${theme}`}>
        <FooterSection theme={theme} setTheme={setTheme} />
      </div>
      </div>
    
  );
};

export default App;

