import{Routes,Route}from'react-router-dom';
import Navbar from'./components/Navbar';
import Footer from'./components/Footer';
import Home from'./pages/Home';
import Destinations from'./pages/Destinations';
import Details from'./pages/Details';
import Packages from'./pages/Packages';
import Booking from'./pages/Booking';
import About from'./pages/About';
export default function App()
{
    return <>
    <Navbar/>
    <Routes><Route path="/" element={<Home/>}/>
    <Route path="/destinations" element={<Destinations/>}/>
    <Route path="/destinations/:id" element={<Details/>}/>
    <Route path="/packages" element={<Packages/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/about" element={<About/>}/></Routes><Footer/></>
    }