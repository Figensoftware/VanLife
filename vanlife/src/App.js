import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails';
import "./server";

function App() {
  return (
    
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route  path='/' element={<Home/>} />
     <Route  path='/about' element={<About/>} />
     <Route path='/vans' element={<Vans/>} />
     <Route path='/vans/:id' element={<VanDetails/>} />
     </Routes>
     </BrowserRouter>
         
   
  );
}

export default App;
