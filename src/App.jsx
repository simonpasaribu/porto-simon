import { useState } from "react"
import profileImg from "./assets/foto.jpg"
export default function App() {
  return (
    <div style={{ background: "#0a0a14", color: "#fff", fontFamily: "sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}


// NAVBAR


function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "rgba(10,10,20,0.95)",
      padding: "1rem 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000,
      borderBottom: "1px solid rgba(0,212,255,0.1)",
    }}>
      <span style={{ color: "#00d4ff", fontSize: "1.2rem", fontWeight: "bold" }}>
        &lt;SPP /&gt;
      </span>

      <div style={{ display: "flex", gap: "2rem" }}>
        <a href="#home" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>Home</a>
        <a href="#about" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>About</a>
        <a href="#skills" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>Skills</a>
        <a href="#portfolio" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>Portfolio</a>
        <a href="#experience" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>Experience</a>
        <a href="#contact" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>Contact</a>
      </div>
    </nav>
  )
}


// HERO 


function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 5%",
      paddingTop: "80px",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}>

        {/* Teks Kiri */}
        <div>
          <p style={{ color: "#00d4ff", fontSize: "0.85rem", letterSpacing: "3px", marginBottom: "1rem" }}>
            &gt; HELLO, WORLD
          </p>

          <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
            I'm <span style={{ color: "#00d4ff" }}>Simon Petrus Pasaribu</span>
          </h1>

          <p style={{ color: "#e94560", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Full-Stack Web Developer
          </p>

          <p style={{ color: "#8888aa", lineHeight: 1.8, maxWidth: "500px", marginBottom: "2.5rem" }}>
            Building scalable and high-performance web solutions for your business needs.
          </p>

          {/* Tombol */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#portfolio" style={{
              background: "#00d4ff",
              color: "#0a0a14",
              padding: "0.9rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.85rem",
            }}>
              VIEW PORTFOLIO
            </a>

            <a href="#contact" style={{
              border: "1px solid #00d4ff",
              color: "#00d4ff",
              padding: "0.9rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "0.85rem",
            }}>
              CONTACT ME
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
            <a href="https://github.com/simonpasaribu" target="_blank" rel="noreferrer"
              style={{ color: "#555", textDecoration: "none", fontSize: "0.85rem" }}>
              GitHub →
            </a>
            <a href="https://www.linkedin.com/in/simon-petrus-pasaribu-a51856240/" target="_blank" rel="noreferrer"
              style={{ color: "#555", textDecoration: "none", fontSize: "0.85rem" }}>
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Foto Kanan */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={profileImg}
            alt="Simon Petrus Pasaribu"
            style={{ width: "320px", height: "400px", objectFit: "cover", borderRadius: "12px", border: "2px solid rgba(0,212,255,0.3)" }}
          />
        </div>

      </div>
    </section>
  )
}


// ABOUT SECTION


function About() {
  return (
    <section id="about" style={{ padding: "8rem 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Judul */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "4px", marginBottom: "0.5rem" }}>// ABOUT ME</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>Who I Am</h2>
          <div style={{ width: "60px", height: "3px", background: "#00d4ff", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>

          {/* Kiri - Bio */}
          <div>
            <p style={{ color: "#8888aa", lineHeight: 1.9, marginBottom: "2rem" }}>
              Saya adalah Full-Stack Web Developer yang passionate dalam membangun
              aplikasi web modern. Dengan kemampuan di sisi front-end maupun back-end,
              saya siap menghadirkan solusi digital yang efisien, scalable, dan user-friendly.
            </p>

            {/* Skill Tags */}
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "1rem" }}>CORE SKILLS</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>HTML/CSS</span>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>JavaScript</span>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>React</span>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>Node.js</span>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>MongoDB</span>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>PostgreSQL</span>
              <span style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem" }}>Docker</span>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2rem" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: "800", color: "#00d4ff", margin: 0 }}>10+</p>
                <p style={{ color: "#5555aa", fontSize: "0.8rem", margin: 0 }}>Projects</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: "800", color: "#00d4ff", margin: 0 }}>2+</p>
                <p style={{ color: "#5555aa", fontSize: "0.8rem", margin: 0 }}>Years Exp</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: "800", color: "#00d4ff", margin: 0 }}>5+</p>
                <p style={{ color: "#5555aa", fontSize: "0.8rem", margin: 0 }}>Clients</p>
              </div>
            </div>
          </div>

          {/* Kanan - Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1.5rem" }}>
              <p style={{ fontSize: "1.5rem", margin: "0 0 0.5rem" }}>⚡</p>
              <p style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.3rem" }}>Timeliness</p>
              <p style={{ color: "#5555aa", fontSize: "0.9rem", margin: 0 }}>Selalu menyelesaikan project tepat waktu tanpa mengorbankan kualitas.</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1.5rem" }}>
              <p style={{ fontSize: "1.5rem", margin: "0 0 0.5rem" }}>🎯</p>
              <p style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.3rem" }}>Attention to Detail</p>
              <p style={{ color: "#5555aa", fontSize: "0.9rem", margin: 0 }}>Setiap baris kode dan pixel tampilan diperhatikan dengan seksama.</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1.5rem" }}>
              <p style={{ fontSize: "1.5rem", margin: "0 0 0.5rem" }}>💬</p>
              <p style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.3rem" }}>Clear Communication</p>
              <p style={{ color: "#5555aa", fontSize: "0.9rem", margin: 0 }}>Menjaga komunikasi yang jelas dan transparan di setiap tahap project.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


// SKILLS SECTION


function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 5%", background: "#0d0d1a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Judul */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "4px", marginBottom: "0.5rem" }}>// SKILLS</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>My Tech Stack</h2>
          <div style={{ width: "60px", height: "3px", background: "#00d4ff", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>

          {/* Front-End */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <h3 style={{ color: "#fff", marginBottom: "1.5rem" }}>Front-End</h3>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>HTML/CSS</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "90%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>JavaScript</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "85%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>React</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "80%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

          </div>

          {/* Back-End */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <h3 style={{ color: "#fff", marginBottom: "1.5rem" }}>Back-End</h3>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>Node.js</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "78%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>MongoDB</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "75%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>PostgreSQL</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "72%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

          </div>

          {/* DevOps */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <h3 style={{ color: "#fff", marginBottom: "1.5rem" }}>DevOps & Tools</h3>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>Docker</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "65%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>Git & GitHub</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "85%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

            <p style={{ color: "#ccc", fontSize: "0.85rem", marginBottom: "0.3rem" }}>CI/CD</p>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginBottom: "1rem" }}>
              <div style={{ height: "100%", width: "60%", background: "linear-gradient(90deg, #00d4ff, #e94560)", borderRadius: "2px" }} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}


// PORTFOLIO 


function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="portfolio" style={{ padding: "8rem 5%", background: "#0a0a14" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Judul */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "4px", marginBottom: "0.5rem" }}>// PORTFOLIO</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>Featured Projects</h2>
          <div style={{ width: "60px", height: "3px", background: "#00d4ff", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        {/* Project Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>

          {/* Project 1 */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "1rem" }}>E-commerce Platform</h3>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>React</span>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>Node.js</span>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>MongoDB</span>
            </div>
            <p style={{ color: "#5555aa", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
              Platform e-commerce scalable untuk perusahaan retail dengan fitur pembayaran dan inventory real-time.
            </p>
            <button
              onClick={() => setActiveProject("ecommerce")}
              style={{ background: "#00d4ff", color: "#0a0a14", border: "none", padding: "0.5rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>
              LIHAT DETAIL
            </button>
          </div>

          {/* Project 2 */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "1rem" }}>Dashboard Analytics</h3>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>React</span>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>PostgreSQL</span>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>Docker</span>
            </div>
            <p style={{ color: "#5555aa", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
              Dashboard interaktif untuk monitoring performa bisnis secara real-time dengan visualisasi data.
            </p>
            <button
              onClick={() => setActiveProject("dashboard")}
              style={{ background: "#00d4ff", color: "#0a0a14", border: "none", padding: "0.5rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>
              LIHAT DETAIL
            </button>
          </div>

          {/* Project 3 */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "1rem" }}>Sistem Manajemen Konten</h3>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>React</span>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>Node.js</span>
              <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem" }}>PostgreSQL</span>
            </div>
            <p style={{ color: "#5555aa", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
              CMS khusus untuk media online dengan fitur manajemen artikel, user, dan konten multimedia.
            </p>
            <button
              onClick={() => setActiveProject("cms")}
              style={{ background: "#00d4ff", color: "#0a0a14", border: "none", padding: "0.5rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>
              LIHAT DETAIL
            </button>
          </div>

        </div>
      </div>

      {/* Modal Detail Project */}
      {activeProject === "ecommerce" && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
          onClick={() => setActiveProject(null)}>
          <div style={{ background: "#0e0e1e", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "20px", maxWidth: "650px", width: "100%", padding: "2.5rem" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <h2 style={{ color: "#fff", fontWeight: "800" }}>E-commerce Platform</h2>
              <button onClick={() => setActiveProject(null)} style={{ background: "none", border: "none", color: "#888", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// SITUATION</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Sebuah perusahaan retail membutuhkan platform e-commerce yang scalable untuk menjangkau lebih banyak pelanggan.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// TASK</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Membangun front-end dan back-end platform secara penuh dengan integrasi sistem pembayaran.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// ACTION</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Menggunakan React untuk UI yang responsif, Node.js untuk REST API, dan MongoDB untuk manajemen data.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// RESULT</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8 }}>Peningkatan penjualan online sebesar 35% dalam 3 bulan pertama setelah launch.</p>
          </div>
        </div>
      )}

      {activeProject === "dashboard" && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
          onClick={() => setActiveProject(null)}>
          <div style={{ background: "#0e0e1e", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "20px", maxWidth: "650px", width: "100%", padding: "2.5rem" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <h2 style={{ color: "#fff", fontWeight: "800" }}>Dashboard Analytics</h2>
              <button onClick={() => setActiveProject(null)} style={{ background: "none", border: "none", color: "#888", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// SITUATION</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Tim internal membutuhkan dashboard untuk memantau performa bisnis secara real-time.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// TASK</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Membuat dashboard interaktif dengan visualisasi data yang mudah dipahami.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// ACTION</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Membangun komponen chart dengan React, koneksi database PostgreSQL, dan deploy menggunakan Docker.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// RESULT</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8 }}>Efisiensi monitoring meningkat 50% dan pengambilan keputusan lebih cepat.</p>
          </div>
        </div>
      )}

      {activeProject === "cms" && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
          onClick={() => setActiveProject(null)}>
          <div style={{ background: "#0e0e1e", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "20px", maxWidth: "650px", width: "100%", padding: "2.5rem" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <h2 style={{ color: "#fff", fontWeight: "800" }}>Sistem Manajemen Konten</h2>
              <button onClick={() => setActiveProject(null)} style={{ background: "none", border: "none", color: "#888", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// SITUATION</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Media online memerlukan CMS khusus untuk mengelola ribuan artikel dan konten multimedia.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// TASK</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Merancang dan mengembangkan CMS yang intuitif dengan fitur manajemen user dan konten.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// ACTION</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, marginBottom: "1.5rem" }}>Mengimplementasikan autentikasi JWT, rich text editor, dan sistem kategorisasi konten.</p>
            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>// RESULT</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8 }}>Tim editorial 3x lebih produktif dalam pengelolaan konten harian.</p>
          </div>
        </div>
      )}

    </section>
  )
}

// ===========================
// EXPERIENCE SECTION
// ===========================

function Experience() {
  return (
    <section id="experience" style={{ padding: "8rem 5%", background: "#0d0d1a" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Judul */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "4px", marginBottom: "0.5rem" }}>// EXPERIENCE</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>Work History</h2>
          <div style={{ width: "60px", height: "3px", background: "#00d4ff", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        {/* Job 1 */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div>
              <h3 style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.3rem" }}>Full-Stack Developer</h3>
              <p style={{ color: "#00d4ff", fontSize: "0.85rem", margin: 0 }}>Tech Startup Jakarta</p>
            </div>
            <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem", height: "fit-content" }}>
              2023 - Present
            </span>
          </div>
          <ul style={{ color: "#7777aa", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
            <li>Membangun dan memelihara REST API menggunakan Node.js dan Express</li>
            <li>Mengembangkan UI responsif dengan React dan Tailwind CSS</li>
            <li>Berkolaborasi dengan tim lintas fungsi untuk deliver fitur tepat waktu</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div>
              <h3 style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.3rem" }}>Front-End Developer</h3>
              <p style={{ color: "#00d4ff", fontSize: "0.85rem", margin: 0 }}>Digital Agency</p>
            </div>
            <span style={{ background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)", color: "#e94560", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.8rem", height: "fit-content" }}>
              2021 - 2023
            </span>
          </div>
          <ul style={{ color: "#7777aa", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
            <li>Membuat komponen UI interaktif menggunakan React dan JavaScript</li>
            <li>Mengoptimalkan performa web dan meningkatkan page load speed</li>
            <li>Bekerja sama dengan desainer untuk implementasi pixel-perfect design</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

// ===========================
// TESTIMONIALS SECTION
// ===========================

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "8rem 5%", background: "#0a0a14" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Judul */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "4px", marginBottom: "0.5rem" }}>// TESTIMONIALS</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>What People Say</h2>
          <div style={{ width: "60px", height: "3px", background: "#00d4ff", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>

          {/* Testimoni 1 */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <p style={{ fontSize: "2.5rem", color: "rgba(0,212,255,0.15)", margin: "0 0 1rem" }}>"</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.5rem" }}>
              Simon adalah developer yang sangat profesional. Hasil kerjanya melebihi ekspektasi kami dan selalu tepat waktu dalam setiap delivery.
            </p>
            <p style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.2rem" }}>Budi Santoso</p>
            <p style={{ color: "#5555aa", fontSize: "0.8rem", margin: 0 }}>CEO, PT Digital Maju</p>
          </div>

          {/* Testimoni 2 */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2rem" }}>
            <p style={{ fontSize: "2.5rem", color: "rgba(0,212,255,0.15)", margin: "0 0 1rem" }}>"</p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.5rem" }}>
              Kemampuan Simon dalam memahami kebutuhan bisnis dan menerjemahkannya ke dalam solusi teknis sangat luar biasa.
            </p>
            <p style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.2rem" }}>Rina Wijaya</p>
            <p style={{ color: "#5555aa", fontSize: "0.8rem", margin: 0 }}>Product Manager, Tech Co</p>
          </div>

        </div>
      </div>
    </section>
  )
}


// CONTACT SECTION

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    if (name === "" || email === "" || message === "") return
    setSent(true)
    setName("")
    setEmail("")
    setMessage("")
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" style={{ padding: "8rem 5%", background: "#0d0d1a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Judul */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "4px", marginBottom: "0.5rem" }}>// CONTACT</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff" }}>Get In Touch</h2>
          <div style={{ width: "60px", height: "3px", background: "#00d4ff", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem" }}>

          {/* Info Kontak */}
          <div>
            <p style={{ color: "#7777aa", lineHeight: 1.8, marginBottom: "2rem" }}>
              Punya project atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
            </p>

            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.3rem" }}>EMAIL</p>
            <a href="mailto:simonpasaribu4@gmail.com" style={{ color: "#ccc", textDecoration: "none", display: "block", marginBottom: "1.5rem" }}>
              simonpasaribu4@gmail.com
            </a>

            <p style={{ color: "#00d4ff", fontSize: "0.75rem", letterSpacing: "3px", marginBottom: "0.3rem" }}>LOKASI</p>
            <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>Jakarta, Indonesia</p>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="https://github.com/simonpasaribu" target="_blank" rel="noreferrer"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#7777aa", padding: "0.6rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem" }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/simon-petrus-pasaribu-a51856240/" target="_blank" rel="noreferrer"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#7777aa", padding: "0.6rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem" }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "2.5rem" }}>

            {sent && (
              <div style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", color: "#00d4ff", fontSize: "0.85rem" }}>
                ✓ Pesan terkirim!
              </div>
            )}

            <p style={{ color: "#5555aa", fontSize: "0.75rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>NAMA</p>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nama kamu"
              style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "0.85rem 1rem", color: "#fff", fontSize: "0.95rem", outline: "none", boxSizing: "border-box", marginBottom: "1.5rem" }}
            />

            <p style={{ color: "#5555aa", fontSize: "0.75rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>EMAIL</p>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com"
              style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "0.85rem 1rem", color: "#fff", fontSize: "0.95rem", outline: "none", boxSizing: "border-box", marginBottom: "1.5rem" }}
            />

            <p style={{ color: "#5555aa", fontSize: "0.75rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>PESAN</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Ceritakan project kamu..."
              rows={5}
              style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "0.85rem 1rem", color: "#fff", fontSize: "0.95rem", outline: "none", resize: "vertical", boxSizing: "border-box", marginBottom: "1.5rem" }}
            />

            <button
              onClick={handleSubmit}
              style={{ width: "100%", background: "linear-gradient(135deg, #00d4ff, #0099cc)", color: "#0a0a14", border: "none", padding: "1rem", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "0.9rem", letterSpacing: "2px" }}>
              KIRIM PESAN
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================
// FOOTER
// ===========================

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem 5%", textAlign: "center", background: "#0a0a14" }}>
      <p style={{ color: "#3333aa", fontSize: "0.85rem" }}>
        © 2026 Simon Petrus Pasaribu — Built with React + Vite
      </p>
    </footer>
  )
}