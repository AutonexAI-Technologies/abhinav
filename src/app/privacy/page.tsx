import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Abhinav Lifts — compliant with the Information Technology Act 2000, IT (Amendment) Act 2008, and applicable Telangana state regulations.",
};

const EFFECTIVE = "24 August 2026";
const CONTACT_EMAIL = "abhinavlifts@gmail.com";
const CONTACT_PHONE = "+91 8096407555";
const BUSINESS_STATE = "Telangana, India";

export default function PrivacyPage() {
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
          <h1 className="d-xl" style={{ marginBottom: 14 }}>Privacy <span className="text-blue">Policy</span></h1>
          <p style={{ color: "var(--faint)", fontSize: "0.85rem" }}>Effective Date: {EFFECTIVE} &nbsp;·&nbsp; Governed under Indian law &nbsp;·&nbsp; Jurisdiction: {BUSINESS_STATE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="legal-body">
          <div style={{ padding: "28px 32px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.14)", borderRadius: "var(--r-xl)", marginBottom: 48, fontSize: "0.875rem", color: "var(--limestone)", lineHeight: 1.8 }}>
            This Privacy Policy governs the collection, use, and protection of personal information provided to Abhinav Lifts (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) through this website and associated coaching services. This policy is compliant with the <strong style={{ color: "var(--cream)" }}>Information Technology Act, 2000</strong>, the <strong style={{ color: "var(--cream)" }}>IT (Amendment) Act, 2008</strong>, the <strong style={{ color: "var(--cream)" }}>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and applicable regulations in the state of Telangana, India.
          </div>

          <S title="1. Information We Collect">
            <p style={{ marginBottom: 12 }}>We collect the following categories of personal information:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong style={{ color: "var(--cream)" }}>Identity Data:</strong> Full name, age, gender.</li>
              <li><strong style={{ color: "var(--cream)" }}>Contact Data:</strong> Phone number (WhatsApp), email address.</li>
              <li><strong style={{ color: "var(--cream)" }}>Health & Fitness Data:</strong> Height, weight, fitness goals, training history, dietary preferences, any known injuries or medical conditions voluntarily disclosed for the purpose of personalised coaching.</li>
              <li><strong style={{ color: "var(--cream)" }}>Usage Data:</strong> Browser type, IP address, pages visited, time spent — collected through standard web analytics.</li>
              <li><strong style={{ color: "var(--cream)" }}>Payment Data:</strong> UPI transaction references or bank transfer confirmations. We do not store full card details.</li>
            </ul>
          </S>

          <S title="2. How We Use Your Information">
            <p>Your data is used exclusively for:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>Delivering personalised coaching programmes and diet plans.</li>
              <li>Communicating with you via WhatsApp regarding your programme.</li>
              <li>Processing and confirming payments.</li>
              <li>Improving our coaching services and website experience.</li>
              <li>Sending you relevant fitness information or programme updates (only where you have provided consent).</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do <strong style={{ color: "var(--cream)" }}>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </S>

          <S title="3. Sensitive Personal Data (SPDI)">
            <p>Health and fitness information (including weight, dietary restrictions, medical conditions) constitutes <strong style={{ color: "var(--cream)" }}>Sensitive Personal Data or Information (SPDI)</strong> under the IT Rules, 2011. This information is:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>Collected only with your explicit, informed consent.</li>
              <li>Used solely for the purpose of providing coaching services.</li>
              <li>Stored securely and never disclosed to unauthorised parties.</li>
              <li>Deletable on request within 30 working days.</li>
            </ul>
          </S>

          <S title="4. Data Storage & Security">
            <p>We implement reasonable security practices as required under Rule 8 of the IT (SPDI) Rules, 2011. Your data is stored on secure, password-protected systems. WhatsApp communications are protected by end-to-end encryption. We review our security practices regularly.</p>
            <p style={{ marginTop: 10 }}>Despite our precautions, no data transmission over the internet is 100% secure. We will notify you promptly in the event of any data breach affecting your personal information.</p>
          </S>

          <S title="5. Data Retention">
            <p>We retain your personal data for as long as you remain an active client, and for up to <strong style={{ color: "var(--cream)" }}>24 months</strong> after your last engagement — unless a shorter period is requested. After this period, data is securely deleted or anonymised.</p>
          </S>

          <S title="6. Third-Party Services">
            <p>Our website may use third-party services including Google Fonts, Google Analytics, and WhatsApp. These services have their own privacy policies. We encourage you to review them. We are not responsible for the privacy practices of third-party platforms.</p>
          </S>

          <S title="7. Your Rights">
            <p>Under Indian law and good data governance practice, you have the right to:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate or incomplete data.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Request deletion of your data.</li>
              <li>Raise a grievance with the designated Grievance Officer (details below).</li>
            </ul>
            <p style={{ marginTop: 12 }}>All requests must be submitted in writing to <strong style={{ color: "var(--blue)" }}>{CONTACT_EMAIL}</strong> and will be addressed within <strong style={{ color: "var(--cream)" }}>30 days</strong>.</p>
          </S>

          <S title="8. Grievance Officer">
            <p>As per Rule 5(9) of the IT (SPDI) Rules, 2011, the designated Grievance Officer is:</p>
            <div style={{ marginTop: 12, padding: "16px 20px", background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.12)", borderRadius: "var(--r-md)" }}>
              <p><strong style={{ color: "var(--cream)" }}>Name:</strong> Abhinav (Proprietor, Abhinav Lifts)</p>
              <p><strong style={{ color: "var(--cream)" }}>Email:</strong> {CONTACT_EMAIL}</p>
              <p><strong style={{ color: "var(--cream)" }}>Phone:</strong> {CONTACT_PHONE}</p>
              <p><strong style={{ color: "var(--cream)" }}>Address:</strong> {BUSINESS_STATE}, India</p>
              <p><strong style={{ color: "var(--cream)" }}>Response time:</strong> Within 30 days of receiving the complaint.</p>
            </div>
          </S>

          <S title="9. Cookies">
            <p>Our website uses functional cookies necessary for the site to operate correctly. We do not use tracking or advertising cookies. You may disable cookies in your browser settings; however, some site features may not function correctly as a result.</p>
          </S>

          <S title="10. Children's Privacy">
            <p>Our services are not directed at individuals under the age of <strong style={{ color: "var(--cream)" }}>18</strong>. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately for deletion.</p>
          </S>

          <S title="11. Changes to This Policy">
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after any changes constitutes your acceptance of the updated policy.</p>
          </S>

          <S title="12. Governing Law & Jurisdiction">
            <p>This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts in <strong style={{ color: "var(--cream)" }}>Hyderabad, Telangana</strong>, India.</p>
          </S>
          </div>{/* legal-body */}
        </div>
      </section>
    </>
  );
}
