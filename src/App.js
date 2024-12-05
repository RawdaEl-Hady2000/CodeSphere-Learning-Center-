import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Programs from './Components/Programs';
import Category from './Components/Category';
import Pricing from './Components/Pricing';
import Courses from './Components/Courses';
import ContactUs from './Components/ContactUs';
// import CourseDetails from './Components/CourseDetails';
import Footer from './Components/Footer';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



// Create the Context
const MyContext = React.createContext({ basename: '/' });

const App = () => {
  return (
    <>
      <MyContext.Provider value={{ basename: '/myapp' }}>
        <Navbar></Navbar>
        <BrowserRouter>
          <HomePage></HomePage>
          <About></About>
          <Programs></Programs>
          <Category></Category>
          <Pricing></Pricing>
          <Courses></Courses>
          {/* <CourseDetails></CourseDetails> */}
          <ContactUs></ContactUs>
        </BrowserRouter>
        <Footer></Footer>
      </MyContext.Provider>

    </>

  );
}




export default App;



