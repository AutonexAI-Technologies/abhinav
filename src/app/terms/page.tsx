import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Abhinav Lifts — compliant with Indian law and Telangana state regulations.",
};

const EFFECTIVE = "24 August 2026";

export default function TermsPage() {
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: 44 }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
  return (
    <>
      <section style={{ padding: "80px 0 40px", borderBottom: "1px solid rgba(0,200,240,0.06)" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Legal</span>
          <h1 className="d-xl" style={{ marginBottom: 14 }}>Terms &amp; <span className="text-blue">Conditions</span></h1>
          <p style={{ color: "var(--faint)", fontSize: "0.85rem" }}>Effective Date: {EFFECTIVE} &nbsp;·&nbsp; Governed under Indian law &nbsp;·&nbsp; Jurisdiction: Hyderabad, Telangana, India</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="legal-body">
          <div style={{ padding: "28px 32px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.14)", borderRadius: "var(--r-xl)", marginBottom: 48, fontSize: "0.875rem", color: "var(--limestone)", lineHeight: 1.8 }}>
            Please read these Terms and Conditions carefully before using the services provided by <strong style={{ color: "var(--cream)" }}>Abhinav Lifts</strong> (&ldquo;Service Provider&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By accessing our website or engaging our coaching services, you agree to be bound by these Terms. These Terms constitute a legally binding agreement under the <strong style={{ color: "var(--cream)" }}>Indian Contract Act, 1872</strong>, the <strong style={{ color: "var(--cream)" }}>Information Technology Act, 2000</strong>, and applicable regulations in the state of <strong style={{ color: "var(--cream)" }}>Telangana, India</strong>.
          </div>

          <S title="1. Definitions">
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong style={{ color: "var(--cream)" }}>Client / User:</strong> Any individual who accesses this website or purchases coaching services from Abhinav Lifts.</li>
              <li><strong style={{ color: "var(--cream)" }}>Services:</strong> Online fitness coaching, resistance training programmes, personal training consultation, meal and workout planning, and cardio exercise programming.</li>
              <li><strong style={{ color: "var(--cream)" }}>Platform:</strong> This website (abhinavlifts.in or associated domains) and WhatsApp-based coaching delivery.</li>
            </ul>
          </S>

          <S title="2. Eligibility">
            <p>Our services are available only to individuals who are:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>At least <strong style={{ color: "var(--cream)" }}>18 years of age</strong>, or 16–17 years with documented parental/guardian consent.</li>
              <li>Physically capable of participating in exercise activities (or have obtained medical clearance from a qualified physician).</li>
              <li>Not under any medical restriction that contraindicated physical training.</li>
            </ul>
            <p style={{ marginTop: 12 }}>By purchasing our services, you confirm that you meet these eligibility requirements.</p>
          </S>

          <S title="3. Services Provided">
            <p>Abhinav Lifts provides the following online coaching services:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li><strong style={{ color: "var(--cream)" }}>Resistance Training Programmes:</strong> Periodised strength training plans tailored to individual goals and experience levels.</li>
              <li><strong style={{ color: "var(--cream)" }}>Personal Training Coaching:</strong> 1-on-1 programme delivery with ongoing WhatsApp support, form review, and programme adjustments.</li>
              <li><strong style={{ color: "var(--cream)" }}>Meal & Workout Plans:</strong> Combined nutrition and training plans with macro targets and meal guides.</li>
              <li><strong style={{ color: "var(--cream)" }}>Cardio Exercise Programming:</strong> Structured cardiovascular training plans including LISS, HIIT, and endurance running.</li>
              <li><strong style={{ color: "var(--cream)" }}>Consultation Calls:</strong> 45-minute goal assessment and roadmap sessions.</li>
            </ul>
            <p style={{ marginTop: 12 }}>All services are delivered remotely via this website, WhatsApp, and associated digital platforms. We do not provide in-person training.</p>
          </S>

          <S title="4. Medical Disclaimer">
            <p style={{ padding: "14px 18px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)", borderRadius: "var(--r-md)", marginBottom: 12 }}>
              <strong style={{ color: "#fca5a5" }}>Important:</strong> The information and programmes provided by Abhinav Lifts are for general fitness and educational purposes only. They do not constitute medical advice, diagnosis, or treatment.
            </p>
            <p>You should consult a qualified medical professional before beginning any new exercise or nutrition programme, particularly if you have:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>A history of heart disease, hypertension, or metabolic disorders.</li>
              <li>Musculoskeletal injuries or chronic pain conditions.</li>
              <li>Any condition for which exercise has been contraindicated by a physician.</li>
            </ul>
            <p style={{ marginTop: 12 }}>By using our services, you acknowledge that you participate voluntarily and assume full responsibility for any risks associated with physical exercise.</p>
          </S>

          <S title="5. Payment Terms">
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>All fees are payable in <strong style={{ color: "var(--cream)" }}>Indian Rupees (INR)</strong> via UPI, bank transfer, or other agreed methods communicated via WhatsApp.</li>
              <li>Payment is due in full before the commencement of any programme, unless otherwise agreed in writing.</li>
              <li>We do not store payment card details. All transactions are the sole responsibility of the respective payment processor.</li>
              <li>Pricing is subject to change. Any change will be communicated to active clients at least 14 days in advance.</li>
            </ul>
          </S>

          <S title="6. Refund Policy">
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong style={{ color: "var(--cream)" }}>Consultation Call:</strong> Non-refundable once the call has been conducted.</li>
              <li><strong style={{ color: "var(--cream)" }}>Monthly Coaching:</strong> Refunds are not provided once a programme has been delivered. If you are dissatisfied, we will work to resolve issues within the programme.</li>
              <li><strong style={{ color: "var(--cream)" }}>3-Month Transformation:</strong> A partial refund (pro-rated) may be considered if a documented medical reason prevents continuation, subject to assessment.</li>
            </ul>
            <p style={{ marginTop: 12 }}>All refund requests must be submitted to <strong style={{ color: "var(--blue)" }}>abhinavlifts@gmail.com</strong> within 7 days of the triggering event.</p>
          </S>

          <S title="7. Intellectual Property">
            <p>All content on this website — including but not limited to training programmes, diet plans, blog articles, graphics, and coaching materials — is the intellectual property of Abhinav Lifts and is protected under the <strong style={{ color: "var(--cream)" }}>Copyright Act, 1957 (India)</strong>.</p>
            <p style={{ marginTop: 10 }}>You may not reproduce, distribute, sell, or share our materials without prior written consent. Personal use by the client who purchased the programme is permitted.</p>
          </S>

          <S title="8. Client Responsibilities">
            <p>As a client, you agree to:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>Provide accurate and complete information in the intake form and during communications.</li>
              <li>Disclose any health conditions, injuries, or medications relevant to your programme.</li>
              <li>Follow the programme as directed and communicate any difficulties promptly.</li>
              <li>Not share, resell, or distribute coaching materials to third parties.</li>
              <li>Engage respectfully with the coach and maintain professional communication.</li>
            </ul>
          </S>

          <S title="9. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, Abhinav Lifts and its proprietor shall not be liable for:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>Any injury, illness, or loss sustained as a result of following a training or nutrition programme.</li>
              <li>Results that differ from your expectations, as fitness outcomes vary based on individual factors including genetics, adherence, and lifestyle.</li>
              <li>Technical failures, website downtime, or interruptions to service delivery outside our reasonable control.</li>
            </ul>
            <p style={{ marginTop: 10 }}>Our maximum liability in any circumstance shall not exceed the total amount paid by you for the relevant service in the 3 months preceding the claim.</p>
          </S>

          <S title="10. Governing Law & Dispute Resolution">
            <p>These Terms are governed by the laws of the Republic of India. Any disputes arising under or in connection with these Terms shall be subject to:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>First, good-faith negotiation between the parties.</li>
              <li>If unresolved, mediation under the <strong style={{ color: "var(--cream)" }}>Mediation Act, 2023 (India)</strong>.</li>
              <li>If further unresolved, the exclusive jurisdiction of courts in <strong style={{ color: "var(--cream)" }}>Hyderabad, Telangana</strong>, India.</li>
            </ul>
          </S>

          <S title="11. Amendments">
            <p>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page. Continued use of our services following an update constitutes acceptance of the revised Terms. We recommend reviewing this page periodically.</p>
          </S>

          <S title="12. Contact">
            <div style={{ padding: "16px 20px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.12)", borderRadius: "var(--r-md)" }}>
              <p>For any questions about these Terms, please contact:</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: "var(--cream)" }}>Abhinav Lifts</strong></p>
              <p><strong style={{ color: "var(--cream)" }}>Email:</strong> abhinavlifts@gmail.com</p>
              <p><strong style={{ color: "var(--cream)" }}>WhatsApp:</strong> +91 8096407555</p>
              <p><strong style={{ color: "var(--cream)" }}>Location:</strong> Hyderabad, Telangana, India</p>
            </div>
          </S>
          </div>{/* legal-body */}
        </div>
      </section>
    </>
  );
}
