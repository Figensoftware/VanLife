import './App.css';
import {
BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';


function App() {
  return (
    
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route  path='/' element={<Home/>} />
     <Route  path='/about' element={<About/>} />
     </Routes>
     </BrowserRouter>
         
   
  );
}

export default App;
