"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const GOALS = ["Fat Loss","Muscle Building","Body Recomposition","Improve Fitness","Run a 5K / 10K / Half Marathon","Hybrid Training","General Health","Other"];
const DIET_TYPES = ["Vegetarian","Eggetarian","Non-Vegetarian","Vegan"];
const EXP_LEVELS = ["Complete Beginner (< 6 months)","Intermediate (6 months – 2 years)","Advanced (2+ years)","Returning after a break"];
const TRAINING_DAYS = ["2–3 days/week","4 days/week","5 days/week","6 days/week","Flexible / Any"];
const PLANS_INTEREST = ["1-on-1 Consultation (₹499)","Online Coaching (₹3,999/mo)","3-Month Transformation (₹9,999)","Hybrid Programming (₹4,499/mo)","Not sure yet — need guidance"];

export default function BookPage() {
  const [form, setForm] = useState({
    name:"",age:"",gender:"",phone:"",email:"",city:"",
    goal:"",otherGoal:"",dietType:"",experience:"",
    trainingDays:"",equipment:"",currentWeight:"",targetWeight:"",
    injuries:"",planInterest:"",hearAbout:"",message:"",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    const msg = encodeURIComponent(
      `Hi Abhinav! I've just filled out the coaching intake form on your website.\n\n` +
      `*Name:* ${form.name}\n*Age:* ${form.age}\n*Gender:* ${form.gender}\n` +
      `*Phone:* ${form.phone}\n*Email:* ${form.email}\n*City:* ${form.city}\n` +
      `*Goal:* ${form.goal}${form.otherGoal ? ` (${form.otherGoal})` : ""}\n` +
      `*Diet:* ${form.dietType}\n*Experience:* ${form.experience}\n` +
      `*Training Days:* ${form.trainingDays}\n*Equipment:* ${form.equipment}\n` +
      `*Current Weight:* ${form.currentWeight}\n*Target Weight:* ${form.targetWeight}\n` +
      `*Injuries/Medical:* ${form.injuries || "None"}\n*Plan Interest:* ${form.planInterest}\n` +
      `*How I heard:* ${form.hearAbout}\n*Message:* ${form.message || "—"}`
    );
    window.open(`https://wa.me/918096407555?text=${msg}`, "_blank");
    setLoading(false);
    setSubmitted(true);
  };

  const Input = ({ label, id, type="text", placeholder, value, onChange, required=false }: any) => (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{label}{required&&<span style={{color:"var(--blue)",marginLeft:2}}>*</span>}</label>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} required={required} className="form-input"/>
    </div>
  );

  const Select = ({ label, id, options, value, onChange, required=false }: any) => (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{label}{required&&<span style={{color:"var(--blue)",marginLeft:2}}>*</span>}</label>
      <select id={id} value={value} onChange={(e)=>onChange(e.target.value)} required={required} className="form-input">
        <option value="">Select an option</option>
        {options.map((o:string)=><option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  if (submitted) return (
    <section style={{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"80px 24px"}}>
      <div style={{maxWidth:520}}>
        <div style={{width:72,height:72,borderRadius:"50%",background:"var(--blue-subtle)",border:"2px solid var(--blue-border)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px",fontSize:"1.8rem"}}>✓</div>
        <h1 className="d-xl" style={{marginBottom:16}}>Form <span className="text-blue">Submitted!</span></h1>
        <p style={{color:"var(--muted)",lineHeight:1.8,marginBottom:36}}>
          Your details have been sent to Abhinav&apos;s WhatsApp. He will review your form and reach out personally within <strong style={{color:"var(--cream)"}}>24 hours</strong>.
        </p>
        <div style={{padding:"20px 24px",background:"rgba(0,200,240,0.04)",border:"1px solid rgba(0,200,240,0.12)",borderRadius:"var(--r-xl)",marginBottom:32}}>
          <p style={{fontStyle:"italic",color:"var(--limestone)",fontSize:"0.9rem",lineHeight:1.75}}>&ldquo;The journey of a thousand miles begins with a single step.&rdquo;</p>
          <p style={{fontSize:"0.72rem",color:"var(--faint)",marginTop:8,textTransform:"uppercase",letterSpacing:"0.12em"}}>— Lao Tzu</p>
        </div>
        <Link href="/" className="btn btn-primary btn-lg">Back to Home <ArrowRight size={16}/></Link>
      </div>
    </section>
  );

  return (
    <>
      {/* Hero */}
      <section style={{padding:"80px 0 60px",borderBottom:"1px solid rgba(0,200,240,0.06)"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}}>
          <div>
            <span className="eyebrow">Book a Call</span>
            <h1 className="d-xl" style={{marginBottom:16}}>Start Your<br/><span className="text-blue">Transformation</span></h1>
            <p style={{fontSize:"1rem",color:"var(--muted)",lineHeight:1.8,marginBottom:32}}>
              Fill in the form below — Abhinav personally reviews every submission and will reach out via WhatsApp within 24 hours with a plan tailored to you.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:36}}>
              {[
                {icon:"⏱",text:"Response within 24 hours"},
                {icon:"💬",text:"Direct WhatsApp communication"},
                {icon:"📋",text:"Fully personalised plan"},
                {icon:"🔒",text:"Your data is kept private"},
              ].map(i=>(
                <div key={i.text} style={{display:"flex",alignItems:"center",gap:12,fontSize:"0.88rem",color:"var(--limestone)"}}>
                  <span style={{fontSize:"1rem"}}>{i.icon}</span>{i.text}
                </div>
              ))}
            </div>
            <div style={{padding:"20px 24px",background:"rgba(0,200,240,0.04)",border:"1px solid rgba(0,200,240,0.10)",borderRadius:"var(--r-lg)"}}>
              <p style={{fontStyle:"italic",color:"var(--limestone)",fontSize:"0.88rem",lineHeight:1.78}}>&ldquo;Discipline is the bridge between goals and accomplishment.&rdquo;</p>
              <p style={{fontSize:"0.68rem",color:"var(--faint)",marginTop:8,textTransform:"uppercase",letterSpacing:"0.12em"}}>— Jim Rohn</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:20}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <Input label="Full Name" id="name" placeholder="Your full name" value={form.name} onChange={(v:string)=>set("name",v)} required/>
              <Input label="Age" id="age" type="number" placeholder="e.g. 24" value={form.age} onChange={(v:string)=>set("age",v)} required/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <Select label="Gender" id="gender" options={["Male","Female","Prefer not to say"]} value={form.gender} onChange={(v:string)=>set("gender",v)} required/>
              <Input label="Phone (WhatsApp)" id="phone" placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={(v:string)=>set("phone",v)} required/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <Input label="Email Address" id="email" type="email" placeholder="you@example.com" value={form.email} onChange={(v:string)=>set("email",v)} required/>
              <Input label="City / Country" id="city" placeholder="e.g. Hyderabad" value={form.city} onChange={(v:string)=>set("city",v)} required/>
            </div>
            <Select label="Primary Goal" id="goal" options={GOALS} value={form.goal} onChange={(v:string)=>set("goal",v)} required/>
            {form.goal==="Other"&&<Input label="Describe your goal" id="otherGoal" placeholder="Tell us more..." value={form.otherGoal} onChange={(v:string)=>set("otherGoal",v)}/>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <Select label="Dietary Preference" id="dietType" options={DIET_TYPES} value={form.dietType} onChange={(v:string)=>set("dietType",v)} required/>
              <Select label="Training Experience" id="experience" options={EXP_LEVELS} value={form.experience} onChange={(v:string)=>set("experience",v)} required/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <Select label="Training Days Per Week" id="trainingDays" options={TRAINING_DAYS} value={form.trainingDays} onChange={(v:string)=>set("trainingDays",v)}/>
              <Input label="Current Weight (kg)" id="currentWeight" placeholder="e.g. 75kg" value={form.currentWeight} onChange={(v:string)=>set("currentWeight",v)}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <Input label="Target Weight (kg)" id="targetWeight" placeholder="e.g. 65kg" value={form.targetWeight} onChange={(v:string)=>set("targetWeight",v)}/>
              <Input label="Available Equipment" id="equipment" placeholder="Gym / Home / Dumbbells only" value={form.equipment} onChange={(v:string)=>set("equipment",v)}/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="injuries">Any injuries or medical conditions?</label>
              <textarea id="injuries" placeholder="List any injuries, conditions, or medications we should know about. Type 'None' if not applicable." value={form.injuries} onChange={(e)=>set("injuries",e.target.value)} className="form-input form-textarea"/>
            </div>
            <Select label="Which plan interests you?" id="planInterest" options={PLANS_INTEREST} value={form.planInterest} onChange={(v:string)=>set("planInterest",v)}/>
            <Select label="How did you hear about Abhinav?" id="hearAbout" options={["Instagram (@abhinav._lifts)","YouTube","WhatsApp / Referral","Google Search","Friend / Family","Other"]} value={form.hearAbout} onChange={(v:string)=>set("hearAbout",v)}/>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Anything else you want Abhinav to know?</label>
              <textarea id="message" placeholder="Extra context, specific questions, or anything else..." value={form.message} onChange={(e)=>set("message",e.target.value)} className="form-input form-textarea"/>
            </div>
            <p style={{fontSize:"0.75rem",color:"var(--faint)",lineHeight:1.7}}>
              By submitting this form, you agree to our <Link href="/privacy" style={{color:"var(--blue)"}}>Privacy Policy</Link> and <Link href="/terms" style={{color:"var(--blue)"}}>Terms & Conditions</Link>. Your information is used solely for coaching purposes.
            </p>
            <button type="submit" disabled={loading} className="btn btn-wa btn-lg" style={{width:"100%",justifyContent:"center",opacity:loading?0.7:1}}>
              {loading?"Sending...":"📲 Send to Abhinav on WhatsApp"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
