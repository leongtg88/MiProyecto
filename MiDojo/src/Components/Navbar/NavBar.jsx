import React from "react";
import logo_light from '../../assets/images/Logo Oscuro 110px.png'
import logo_dark from '../../assets/images/Logo Blanco 110px.png'
import search_icon_light from '../../assets/images/search-w.png'
import search_icon_dark from '../../assets/images/search-b.png'
import toogle_light from '../../assets/images/night.png'
import toogle_dark from '../../assets/images/day.png'
import './Navbar.css' 

const NavBar = ({theme, setTheme}) =>{
    
    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
    
    return(
            <div className="navbar">
                <img src={theme == 'light' ? logo_light : logo_dark} alt="" className= "logo" />
                <ul src={theme == 'light' ?  toogle_light : toogle_dark}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Schedule</li>
                    <li>Contact</li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <img src={theme == 'light' ? search_icon_light : search_icon_dark } alt="" />
                </div>
                    <img onClick={()=>{toggle_mode()}}src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon' />
            </div>
        
    );
};

export default NavBar;

