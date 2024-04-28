import React, { useEffect, useState } from 'react';
import Logo from './assets/images/Logo 2022 110 px.png';
import NavBar from './Components/Navbar/NavBar';
import PageOne from './Components/Form/pageOne';
import HomePage from './views/HomePage/HomePage';
import Image3 from './assets/images/header.png';
import Image16 from './assets/images/familiasamurai.png';
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
      <HomePage image={Image3} /> 
      <PageOne logo={Logo} />
      <AboutUs image={Image16} />
      <FooterSection  />
    </div>
  );
};

export default App;

