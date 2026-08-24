import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Home.module.css";
export default function HomeTransformations() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className={styles.tGrid}>
          <div className={styles.tBody}>
            <span className="eyebrow">Results</span>
            <h2 className="d-xl">Real People.<br/><span className="text-blue">Real Results.</span></h2>
            <p style={{fontSize:"1rem",lineHeight:1.85,color:"var(--limestone)"}}>
              Every client on a personalised programme. The results speak for themselves — disciplined training, smart nutrition, and consistent weekly support.
            </p>
            <p style={{fontSize:"0.9rem",lineHeight:1.8,color:"var(--muted)"}}>
              Clients across India, UAE, and the UK have transformed their physiques using evidence-based programming — without crash diets or unsustainable routines.
            </p>
            <div style={{padding:"20px 24px",background:"rgba(0,200,240,0.04)",border:"1px solid rgba(0,200,240,0.12)",borderRadius:"var(--r-lg)"}}>
              <p style={{fontStyle:"italic",color:"var(--limestone)",fontSize:"0.92rem",lineHeight:1.75}}>&ldquo;The secret of your success is determined by your daily agenda. Focus on the process, and the results will follow.&rdquo;</p>
            </div>
            <Link href="/transformations" className="btn btn-primary" style={{width:"fit-content",display:"inline-flex",gap:8,alignItems:"center"}}>
              See Transformations <ArrowRight size={16}/>
            </Link>
          </div>
          <div className={styles.tImgPair}>
            <div className={styles.tImg} style={{background:"rgba(12,13,22,0.8)"}}>
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12}}>
                <span style={{fontSize:"2.5rem"}}>📸</span>
                <p style={{fontSize:"0.82rem",color:"var(--faint)",textAlign:"center",padding:"0 20px"}}>Transformations<br/>Yet to be uploaded</p>
              </div>
              <span className={styles.tLabel}>Before</span>
            </div>
            <div className={styles.tImg} style={{background:"rgba(12,13,22,0.8)"}}>
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12}}>
                <span style={{fontSize:"2.5rem"}}>✨</span>
                <p style={{fontSize:"0.82rem",color:"var(--faint)",textAlign:"center",padding:"0 20px"}}>Results<br/>Coming Soon</p>
              </div>
              <span className={`${styles.tLabel} ${styles.tLabelA}`}>After</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
