import{useState}from'react';
import{Link,NavLink}from'react-router-dom';
import{Menu,X,Plane}from'lucide-react';
export default function Navbar()
{const[open,setOpen]=useState(false);
    return <header className="navbar">
        <div className="container nav-inner">
            <Link className="brand" to="/" onClick={()=>setOpen(false)}>
            <b><Plane size={18}/></b>Travel<span>Mate</span></Link>
            <button className="mobile" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
            <nav className={open?"nav open":"nav"}>
                <NavLink end to="/" onClick={()=>setOpen(false)}>Home</NavLink>
                <NavLink to="/destinations" onClick={()=>setOpen(false)}>Destinations</NavLink>
                <NavLink to="/packages" onClick={()=>setOpen(false)}>Packages</NavLink>
                <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>
                <Link className="book" to="/booking" onClick={()=>setOpen(false)}>Book a Trip</Link>
            </nav>
        </div>
    </header>
}