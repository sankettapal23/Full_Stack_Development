import{Link}from'react-router-dom';
import{MapPin,Star,ArrowUpRight,Check,Clock}from'lucide-react';
export function DestinationCard({d})
{return <article className="dest-card">
    <div className="pic"><img src={d.image} alt={d.name}/>
    <span className="pill">{d.category}</span>
    <span className="rating"><Star size={13} fill="currentColor"/> {d.rating}</span>
    </div>
    <div className="card-body"><small><MapPin size={13}/> 
    {d.country}</small><h3>{d.name}</h3><p>{d.desc}</p>
    <div className="card-bottom">
        <strong>₹{d.price.toLocaleString("en-IN")}</strong>
        <i>/ person</i><Link to={"/destinations/"+d.id}>
        <ArrowUpRight/></Link></div></div></article>}
        export function PackageCard({p})
        {return <article className="package-card">
            <div className="package-pic">
                <img src={p.image} alt={p.title}/>
                <b>{p.badge}</b></div>
                <div className="package-body">
                    <small>{p.destination}</small>
                    <h3>{p.title}</h3>
                    <span className="duration">
                        <Clock size={14}/> {p.days}</span>
                        <div className="features">{p.features.map(x=><span key={x}><Check size={13}/> {x}</span>)}
                        </div>
                        <div className="package-bottom"><div>
                            <em>Starting from</em><strong>₹{p.price.toLocaleString("en-IN")}</strong>
                            <del>₹{p.old.toLocaleString("en-IN")}</del></div>
                            <Link to="/booking">Book →</Link></div></div></article>
                            }