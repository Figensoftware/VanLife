import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import "./server";
import Layout from './Components/Layout';

import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import HostVans from './pages/Host/HostVans';
import Reviews from './pages/Host/Reviews';
import HostLayout from './Components/HostLayout';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostVaninfo from './pages/Host/HostVaninfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound';


function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      {/*hepsinde başındaki "/"" kaldırıldı relative path oldukları için  */}
      {/* Index Routes ile  path='/' ve path="host"  yerine index kullanıldı. */}
      <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>} />
     <Route  path='about' element={<About/>} />
     <Route path='vans' element={<Vans/>} />
     <Route path='vans/:id' element={<VanDetails/>} />


     <Route path='host' element={<HostLayout/>}>
     <Route index element={<Dashboard />} />
     <Route path='income' element={<Income/>} />
     <Route path='reviews' element={<Reviews/>} />
     <Route  path='vans' element={<HostVans/>} />
     <Route  path='vans/:id' element={<HostVanDetails/>} >
      <Route index element={<HostVaninfo/>} />
      <Route path='pricing' element={<HostVanPricing/>} />
      <Route path='photos' element={<HostVanPhotos/>} />
      </Route> 

   </Route>
   <Route path='*' element={<NotFound/>}/>
  </Route>
</Routes>
</BrowserRouter>
         
   
  );
}

export default App;
