// RoutesIndex.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import AboutUs from "../views/AboutUs/AboutUs";
import Schedule from "../views/Schedule/Schedule";
import Contact from "../views/Contact/Contact";


const RoutesIndex = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/aboutus',
    element: <AboutUs />
  },
  {
    path: '/schedule',
    element: <Schedule />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

export default RoutesIndex;
