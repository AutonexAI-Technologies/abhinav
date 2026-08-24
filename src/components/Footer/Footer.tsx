import Link from "next/link";

const NAV_LINKS = [
  {label:"About",           href:"/about"},
  {label:"Services",        href:"/services"},
  {label:"Diet Plans",      href:"/diet-plans"},
  {label:"Transformations", href:"/transformations"},
  {label:"Blog",            href:"/blog"},
  {label:"Pricing",         href:"/pricing"},
  {label:"Book a Call",     href:"/book"},
];
const LEGAL = [
  {label:"Privacy Policy",     href:"/privacy"},
  {label:"Terms & Conditions", href:"/terms"},
];
const SERVICES = ["Resistance Training","Personal Training","Meal & Workout Plans","Cardio Exercises","Online Coaching","Custom Diet Plans"];

const linkStyle = {fontSize:"0.875rem",color:"var(--muted)",transition:"color .2s"} as const;

export default function Footer() {
  return (
    <footer style={{background:"rgba(7,8,15,0.97)",borderTop:"1px solid rgba(0,200,240,0.07)",padding:"72px 0 0"}}>
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:48,paddingBottom:56,borderBottom:"1px solid rgba(0,200,240,0.05)"}}>

          {/* Brand */}
          <div style={{display:"flex",flexDirection:"column",gap:18}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:36,height:36,borderRadius:9,background:"linear-gradient(135deg,#00C8F0,#005f77)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--ff-display)",fontSize:"1.2rem",color:"#07080f"}}>A</div>
              <span style={{fontFamily:"var(--ff-ui)",fontWeight:700,fontSize:"0.9rem",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--cream)"}}>
                ABHINAV <span style={{color:"var(--blue)"}}>LIFTS</span>
              </span>
            </div>
            <p style={{fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.8,maxWidth:300}}>
              Online fitness coaching, hybrid athlete, long-distance runner, and content creator. Building stronger bodies and more disciplined minds.
            </p>
            <div style={{display:"flex",gap:10}}>
              <a href="https://www.instagram.com/abhinav._lifts/" target="_blank" rel="noopener noreferrer"
                style={{padding:"7px 16px",borderRadius:"9999px",fontSize:"0.75rem",fontWeight:600,color:"var(--muted)",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}}>
                📸 @abhinav._lifts
              </a>
            </div>
            <div style={{padding:"14px 18px",background:"rgba(0,200,240,0.04)",border:"1px solid rgba(0,200,240,0.09)",borderRadius:"12px"}}>
              <p style={{fontSize:"0.78rem",color:"var(--faint)",fontStyle:"italic",lineHeight:1.7}}>
                &ldquo;Discipline is doing what needs to be done, even when you don&apos;t feel like doing it.&rdquo;
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 style={{fontSize:"0.62rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--faint)",marginBottom:20}}>Pages</h3>
            <nav style={{display:"flex",flexDirection:"column",gap:10}}>
              {NAV_LINKS.map(l=><Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>)}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 style={{fontSize:"0.62rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--faint)",marginBottom:20}}>Services</h3>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {SERVICES.map(s=><Link key={s} href="/services" style={linkStyle}>{s}</Link>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{fontSize:"0.62rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"var(--faint)",marginBottom:20}}>Contact</h3>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <a href="https://wa.me/918096407555" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:8,fontSize:"0.875rem",color:"var(--muted)"}}>
                <span>💬</span> WhatsApp
              </a>
              <a href="mailto:abhinavlifts@gmail.com" style={{display:"flex",alignItems:"center",gap:8,fontSize:"0.875rem",color:"var(--muted)"}}>
                <span>✉️</span> Email Us
              </a>
              <p style={{fontSize:"0.78rem",color:"var(--faint)",lineHeight:1.75,marginTop:4}}>
                Hyderabad, Telangana<br/>India
              </p>
              <Link href="/book" className="btn btn-primary btn-sm" style={{marginTop:8,width:"fit-content"}}>
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{padding:"24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <p style={{fontSize:"0.78rem",color:"var(--faint)"}}>
            © {new Date().getFullYear()} Abhinav Lifts. All rights reserved. Hyderabad, Telangana, India.
          </p>
          <div style={{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"}}>
            <Link href="/tools" style={{fontSize:"0.78rem",color:"var(--faint)"}}>Free Tools</Link>
            {LEGAL.map(l=><Link key={l.href} href={l.href} style={{fontSize:"0.78rem",color:"var(--faint)"}}>{l.label}</Link>)}
          </div>
          <p style={{fontSize:"0.72rem",color:"var(--faint)"}}>
            Designed &amp; Developed by{" "}
            <a href="https://www.autonexai.org/" target="_blank" rel="noopener noreferrer"
              style={{color:"var(--blue)",fontWeight:600,textDecoration:"none"}}>
              Autonex AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
