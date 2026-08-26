"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Clock, MessageCircle, FileText, Lock, Send } from "lucide-react";

const GOALS = ["Fat Loss","Muscle Building","Body Recomposition","Improve Overall Fitness","Run a 5K / 10K / Half Marathon","Hybrid Training","General Health","Other"];
const DIET_TYPES = ["Vegetarian","Eggetarian","Non-Vegetarian","Vegan"];
const EXP_LEVELS = ["Complete Beginner (under 6 months)","Intermediate (6 months – 2 years)","Advanced (2+ years)","Returning after a break"];
const TRAINING_DAYS = ["2–3 days / week","4 days / week","5 days / week","6 days / week","Flexible / Any"];
const PLANS_INTEREST = ["1-on-1 Consultation — ₹499","Online Coaching — ₹3,999/mo","3-Month Transformation — ₹9,999","Hybrid Programming — ₹4,499/mo","Not sure yet — need guidance"];
const HEAR_ABOUT = ["Instagram (@abhinav_.lifts)","YouTube","WhatsApp / Referral","Google Search","Friend / Family","Other"];

const PROMISES = [
  { icon: <Clock size={14} />, text: "Response within 24 hours" },
  { icon: <MessageCircle size={14} />, text: "Direct WhatsApp communication" },
  { icon: <FileText size={14} />, text: "Fully personalised plan" },
  { icon: <Lock size={14} />, text: "Your data is kept private" },
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 10,
  padding: "12px 16px",
  fontSize: "0.875rem",
  color: "#f5f0eb",
  outline: "none",
  fontFamily: "'Inter', sans-serif",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
  appearance: "none" as const,
};

const labelStyle = {
  display: "block",
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.42)",
  marginBottom: 8,
};

export default function BookPage() {
  const [form, setForm] = useState({
    name:"", age:"", gender:"", phone:"", email:"", city:"",
    goal:"", otherGoal:"", dietType:"", experience:"",
    trainingDays:"", equipment:"", currentWeight:"", targetWeight:"",
    injuries:"", planInterest:"", hearAbout:"", message:"",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    const msg = encodeURIComponent(
      `Hi Abhinav! I filled out the intake form on your website.\n\n` +
      `*Name:* ${form.name}\n*Age:* ${form.age}\n*Gender:* ${form.gender}\n` +
      `*Phone:* ${form.phone}\n*Email:* ${form.email}\n*City / Country:* ${form.city}\n` +
      `*Goal:* ${form.goal}${form.otherGoal ? ` — ${form.otherGoal}` : ""}\n` +
      `*Diet:* ${form.dietType}\n*Experience:* ${form.experience}\n` +
      `*Training Days:* ${form.trainingDays}\n*Equipment:* ${form.equipment || "Not specified"}\n` +
      `*Current Weight:* ${form.currentWeight || "Not specified"}\n*Target Weight:* ${form.targetWeight || "Not specified"}\n` +
      `*Injuries / Medical:* ${form.injuries || "None"}\n*Plan Interest:* ${form.planInterest || "Not specified"}\n` +
      `*How I heard:* ${form.hearAbout || "Not specified"}\n*Message:* ${form.message || "—"}`
    );
    window.open(`https://wa.me/918096407555?text=${msg}`, "_blank");
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) return (
    <section style={{ minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#09090b", padding:"80px 24px" }}>
      <div style={{ maxWidth:480, textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", gap:24 }}>
        <div style={{ width:72, height:72, borderRadius:"50%", background:"rgba(0,200,240,0.10)", border:"1.5px solid rgba(0,200,240,0.25)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <Check size={28} color="#00C8F0" />
        </div>
        <h1 style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:"clamp(2.5rem,6vw,4rem)", fontWeight:400, letterSpacing:"0.04em", color:"#f5f0eb", lineHeight:1 }}>
          Form <span style={{ color:"#00C8F0" }}>Submitted!</span>
        </h1>
        <p style={{ fontSize:"0.95rem", lineHeight:1.8, color:"rgba(255,255,255,0.45)", maxWidth:380 }}>
          Your details have been sent to Abhinav&apos;s WhatsApp. He personally reviews every submission and will reach out within <strong style={{ color:"#f5f0eb" }}>24 hours</strong>.
        </p>
        <div style={{ padding:"20px 28px", background:"rgba(0,200,240,0.04)", border:"1px solid rgba(0,200,240,0.10)", borderLeft:"3px solid #00C8F0", borderRadius:"0 12px 12px 0", textAlign:"left" }}>
          <p style={{ fontStyle:"italic", color:"rgba(255,255,255,0.5)", fontSize:"0.875rem", lineHeight:1.75 }}>
            &ldquo;The journey of a thousand miles begins with a single step.&rdquo;
          </p>
          <p style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.25)", marginTop:8, textTransform:"uppercase", letterSpacing:"0.14em" }}>— Lao Tzu</p>
        </div>
        <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"0.9rem 2rem", borderRadius:999, background:"#00C8F0", color:"#09090b", fontFamily:"'Inter', sans-serif", fontWeight:700, fontSize:"0.875rem", textDecoration:"none" }}>
          Back to Home <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );

  return (
    <div style={{ background:"#09090b", minHeight:"100vh" }}>
      {/* ── Page header ── */}
      <section style={{ padding:"clamp(80px,10vw,120px) 0 0", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"72px 80px", alignItems:"start" }}>

            {/* Left — info */}
            <div style={{ display:"flex", flexDirection:"column", gap:28, paddingBottom:72 }}>
              <span style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:"0.72rem", letterSpacing:"0.28em", textTransform:"uppercase", color:"#00C8F0" }}>
                Book a Call
              </span>
              <h1 style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, letterSpacing:"0.02em", color:"#f5f0eb", lineHeight:1 }}>
                Start Your<br /><span style={{ color:"#00C8F0" }}>Transformation</span>
              </h1>
              <p style={{ fontSize:"clamp(0.9rem,1.3vw,1rem)", lineHeight:1.85, color:"rgba(255,255,255,0.45)", maxWidth:420 }}>
                Fill in the form — Abhinav personally reviews every submission and will reach out via WhatsApp within 24 hours with a plan tailored entirely to you.
              </p>

              {/* Promise list */}
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {PROMISES.map(p => (
                  <div key={p.text} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:32, height:32, borderRadius:8, background:"rgba(0,200,240,0.08)", border:"1px solid rgba(0,200,240,0.14)", display:"flex", alignItems:"center", justifyContent:"center", color:"#00C8F0", flexShrink:0 }}>
                      {p.icon}
                    </div>
                    <span style={{ fontSize:"0.875rem", color:"rgba(255,255,255,0.52)" }}>{p.text}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div style={{ padding:"22px 28px", background:"rgba(0,200,240,0.03)", border:"1px solid rgba(0,200,240,0.08)", borderLeft:"3px solid #00C8F0", borderRadius:"0 12px 12px 0", marginTop:8 }}>
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontStyle:"italic", color:"rgba(255,255,255,0.55)", fontSize:"1rem", lineHeight:1.75 }}>
                  &ldquo;Discipline is the bridge between goals and accomplishment.&rdquo;
                </p>
                <p style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.25)", marginTop:10, textTransform:"uppercase", letterSpacing:"0.14em" }}>— Jim Rohn</p>
              </div>

              {/* Pricing summary */}
              <div style={{ display:"flex", flexDirection:"column", gap:2, border:"1px solid rgba(255,255,255,0.06)", borderRadius:14, overflow:"hidden" }}>
                {[
                  { name:"Consultation", price:"₹499", per:"one-time" },
                  { name:"Online Coaching", price:"₹3,999", per:"/mo", featured:true },
                  { name:"3-Month Transform", price:"₹9,999", per:"3 months" },
                ].map(plan => (
                  <div key={plan.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 20px", background: (plan as any).featured ? "rgba(0,200,240,0.05)" : "rgba(255,255,255,0.01)", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize:"0.83rem", fontWeight: (plan as any).featured ? 600 : 400, color: (plan as any).featured ? "#f5f0eb" : "rgba(255,255,255,0.48)" }}>{plan.name}</span>
                    <span style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:"1.1rem", letterSpacing:"0.04em", color: (plan as any).featured ? "#00C8F0" : "#f5f0eb" }}>
                      {plan.price}<span style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.32)", marginLeft:3, fontFamily:"'Inter', sans-serif" }}>{plan.per}</span>
                    </span>
                  </div>
                ))}
                <div style={{ padding:"14px 20px", background:"transparent" }}>
                  <Link href="/pricing" style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.28)", textDecoration:"none", display:"flex", alignItems:"center", gap:6 }}>
                    View full pricing <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ paddingBottom:72 }}>
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:0 }}>
                <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:20, overflow:"hidden" }}>

                  {/* Section: Personal Info */}
                  <div style={{ padding:"28px 32px", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.22)", marginBottom:20 }}>
                      Personal Information
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                      <div>
                        <label style={labelStyle}>Full Name <span style={{ color:"#00C8F0" }}>*</span></label>
                        <input style={inputStyle} placeholder="Your full name" value={form.name} onChange={e=>set("name",e.target.value)} required />
                      </div>
                      <div>
                        <label style={labelStyle}>Age <span style={{ color:"#00C8F0" }}>*</span></label>
                        <input style={inputStyle} type="number" placeholder="e.g. 26" value={form.age} onChange={e=>set("age",e.target.value)} required min={14} max={80} />
                      </div>
                      <div>
                        <label style={labelStyle}>Gender <span style={{ color:"#00C8F0" }}>*</span></label>
                        <select style={{ ...inputStyle, color: form.gender ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.gender} onChange={e=>set("gender",e.target.value)} required>
                          <option value="">Select</option>
                          {["Male","Female","Prefer not to say"].map(o=><option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>WhatsApp Number <span style={{ color:"#00C8F0" }}>*</span></label>
                        <input style={inputStyle} placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={e=>set("phone",e.target.value)} required />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address <span style={{ color:"#00C8F0" }}>*</span></label>
                        <input style={inputStyle} type="email" placeholder="you@example.com" value={form.email} onChange={e=>set("email",e.target.value)} required />
                      </div>
                      <div>
                        <label style={labelStyle}>City / Country <span style={{ color:"#00C8F0" }}>*</span></label>
                        <input style={inputStyle} placeholder="e.g. Hyderabad, India" value={form.city} onChange={e=>set("city",e.target.value)} required />
                      </div>
                    </div>
                  </div>

                  {/* Section: Training Details */}
                  <div style={{ padding:"28px 32px", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.22)", marginBottom:20 }}>
                      Training & Goals
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                      <div>
                        <label style={labelStyle}>Primary Goal <span style={{ color:"#00C8F0" }}>*</span></label>
                        <select style={{ ...inputStyle, color: form.goal ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.goal} onChange={e=>set("goal",e.target.value)} required>
                          <option value="">Select your goal</option>
                          {GOALS.map(o=><option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      {form.goal==="Other" && (
                        <div>
                          <label style={labelStyle}>Describe your goal</label>
                          <input style={inputStyle} placeholder="Tell us more..." value={form.otherGoal} onChange={e=>set("otherGoal",e.target.value)} />
                        </div>
                      )}
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                        <div>
                          <label style={labelStyle}>Dietary Preference <span style={{ color:"#00C8F0" }}>*</span></label>
                          <select style={{ ...inputStyle, color: form.dietType ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.dietType} onChange={e=>set("dietType",e.target.value)} required>
                            <option value="">Select</option>
                            {DIET_TYPES.map(o=><option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>Training Experience <span style={{ color:"#00C8F0" }}>*</span></label>
                          <select style={{ ...inputStyle, color: form.experience ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.experience} onChange={e=>set("experience",e.target.value)} required>
                            <option value="">Select</option>
                            {EXP_LEVELS.map(o=><option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>Training Days / Week</label>
                          <select style={{ ...inputStyle, color: form.trainingDays ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.trainingDays} onChange={e=>set("trainingDays",e.target.value)}>
                            <option value="">Select</option>
                            {TRAINING_DAYS.map(o=><option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>Available Equipment</label>
                          <input style={inputStyle} placeholder="Gym / Home / Dumbbells" value={form.equipment} onChange={e=>set("equipment",e.target.value)} />
                        </div>
                        <div>
                          <label style={labelStyle}>Current Weight (kg)</label>
                          <input style={inputStyle} placeholder="e.g. 80" value={form.currentWeight} onChange={e=>set("currentWeight",e.target.value)} />
                        </div>
                        <div>
                          <label style={labelStyle}>Target Weight (kg)</label>
                          <input style={inputStyle} placeholder="e.g. 70" value={form.targetWeight} onChange={e=>set("targetWeight",e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section: Health & Plan */}
                  <div style={{ padding:"28px 32px", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.22)", marginBottom:20 }}>
                      Health & Plan Selection
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                      <div>
                        <label style={labelStyle}>Injuries or Medical Conditions</label>
                        <textarea style={{ ...inputStyle, resize:"vertical", minHeight:80 }} placeholder="List any injuries, conditions, or medications. Type 'None' if not applicable." value={form.injuries} onChange={e=>set("injuries",e.target.value)} />
                      </div>
                      <div>
                        <label style={labelStyle}>Which Plan Interests You?</label>
                        <select style={{ ...inputStyle, color: form.planInterest ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.planInterest} onChange={e=>set("planInterest",e.target.value)}>
                          <option value="">Select a plan</option>
                          {PLANS_INTEREST.map(o=><option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>How Did You Hear About Abhinav?</label>
                        <select style={{ ...inputStyle, color: form.hearAbout ? "#f5f0eb" : "rgba(255,255,255,0.28)" }} value={form.hearAbout} onChange={e=>set("hearAbout",e.target.value)}>
                          <option value="">Select</option>
                          {HEAR_ABOUT.map(o=><option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Anything Else You Want Abhinav to Know?</label>
                        <textarea style={{ ...inputStyle, resize:"vertical", minHeight:80 }} placeholder="Extra context, specific questions, or anything else..." value={form.message} onChange={e=>set("message",e.target.value)} />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ padding:"24px 32px" }}>
                    <p style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.22)", lineHeight:1.7, marginBottom:18 }}>
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" style={{ color:"#00C8F0", textDecoration:"none" }}>Privacy Policy</Link>
                      {" "}and{" "}
                      <Link href="/terms" style={{ color:"#00C8F0", textDecoration:"none" }}>Terms & Conditions</Link>.
                      Your information is used solely for coaching purposes.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width:"100%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        gap:10,
                        padding:"1rem 2rem",
                        borderRadius:999,
                        background: loading ? "rgba(0,200,240,0.5)" : "#00C8F0",
                        color:"#09090b",
                        fontFamily:"'Inter', sans-serif",
                        fontWeight:700,
                        fontSize:"0.9rem",
                        letterSpacing:"0.02em",
                        border:"none",
                        cursor: loading ? "not-allowed" : "pointer",
                        boxShadow:"0 4px 24px rgba(0,200,240,0.28)",
                        transition:"background 0.2s, transform 0.2s",
                      }}
                    >
                      <Send size={16} />
                      {loading ? "Sending to WhatsApp..." : "Send to Abhinav on WhatsApp"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
