import{Link}from'react-router-dom';
export default function Footer()
{return <footer><div className="container foot"><div>
    <div className="footer-brand">Travel<span>Mate</span>
    </div><p>Making extraordinary travel simple, personal and unforgettable.</p></div>
    <div><h4>Explore</h4><Link to="/destinations">Destinations</Link>
    <Link to="/packages">Packages</Link>
    <Link to="/about">About</Link></div>
    <div><h4>Support</h4><Link to="/booking">Book a Trip</Link>
    <a href="mailto:hello@travelmate.example">Contact</a>
    <a href="#">FAQs</a></div><div><h4>Newsletter</h4>
    <p>Get travel inspiration and special offers.</p>
    <div className="newsletter"><input placeholder="Your email"/>
    <button>→</button></div></div></div>
    <div className="container copyright">© 2026 TravelMate · Built for travelers ✈</div>
    </footer>
    }