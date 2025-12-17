import React from 'react';
import Amisha from './assets/amishahero.jpeg' 



function App() {
  return (
    <>
      <style>{`
        /* --- GLOBAL STYLES (Normally in index.css) --- */
        :root {
          --bg-cream: #EAE3CE;        
          --tiger-orange: #EF8603;    
          --burnt-tangerine: #E12D12; 
          --laser-blue: #0E5BDF;      
          --jasmine: #FFE88E;         
          --text-dark: #1a1a1a;       
          --text-light: #EAE3CE;      
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: var(--bg-cream);
          color: var(--text-dark);
          font-family: 'Inter', sans-serif;
        }

        /* --- COMPONENT STYLES (Normally in App.css) --- */
        .portfolio-wrapper {
          padding: 2rem;
          min-height: 100vh;
          background-color: var(--bg-cream);
        }

        .bento-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr); 
          grid-auto-rows: minmax(180px, auto); 
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-box {
          background-color: white;
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .rmpadding{
          margin-top: 0;
        }

        .bento-box:hover {
          transform: translateY(-5px);
          box-shadow: 10px 10px 0px rgba(0,0,0,0.1);
          z-index: 10;
        }

        /* utility: keep content at the top instead of space-between */
        .bento-box.align-top { justify-content: flex-start; }

        /* SIZING UTILITIES */
        .col-span-2 { grid-column: span 2; }
        .col-span-3 { grid-column: span 3; }
        .row-span-2 { grid-row: span 2; }

        /* COLORS */
        .bg-orange { background-color: var(--tiger-orange); color: var(--text-light); }
        .bg-blue   { background-color: var(--laser-blue); color: var(--text-light); }
        .bg-red    { background-color: var(--burnt-tangerine); color: var(--text-light); }
        .bg-white  { background-color: white; border: 2px solid var(--text-dark); color: var(--text-dark); }

        /* TYPOGRAPHY */
        .bento-box h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .bento-box h3 {
          font-size: 1.1rem;
          opacity: 0.9;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.25rem;
        }

        .bento-box p {
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1;
          font-weight: 900;
        }

        /* COMPONENT SPECIFICS */
        .skill-tag {
          display: inline-block;
          background: rgba(255,255,255, 0.25);
          padding: 6px 14px;
          border-radius: 20px;
          margin: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .heroImage {
          margin-top: 1rem;
          text-align: center;
          align-self: center;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        
        .heroImage img {
          width: clamp(200px, 28vw, 400px);
          aspect-ratio: 4 / 5;
          height: auto;
          object-fit: cover;
          border-radius: 10%;
          border: 4px solid var(--text-light);
        }

        .job-item {
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .job-item:last-child {
          border-bottom: none;
        }

        .contact-link {
          color: white;
          text-decoration: underline;
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: auto;
          display: block;
        }

        /* DECORATIVE ELEMENTS */
        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--jasmine);
          color: var(--text-dark);
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
          transform: rotate(5deg);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .bento-container {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
          }
          .col-span-2, .col-span-3, .row-span-2 {
            grid-column: auto;
            grid-row: auto;
          }
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="portfolio-wrapper" style={{paddingTop: '30px'}}>
        <div className="bento-container">

          {/* 1. HERO BLOCK (Blue) */}
          <div className="bento-box col-span-2 row-span-2 bg-blue">
            <span className="badge">Open to Work</span>
            <div>
              <h3>Aspiring Clinical Psychologist</h3>
              <h1 className="hero-title">Amisha Verma</h1>
            </div>
            <div className="heroImage">
              <img src={Amisha} alt="photo" />
            </div>
            <div style={{ marginTop: 'auto' }}>
              <p style={{ fontSize: '1.1rem', maxWidth: '90%' }}>
                Dedicated psychology student pursuing a Master's in Clinical Psychology. 
                Passionate about serving underprivileged communities and mental health awareness.
              </p>
            </div>
          </div>

          {/* 2. EDUCATION BLOCK (White) */}
          <div 
            className="bento-box align-top row-span-2 bg-white" 
            style={{ padding: '40px' }}
          >
            <h3>Education</h3>
            {/* Added 2rem gap here so items aren't stuck to top */}
            <div style={{ marginTop: '2rem' }}>
              <div className="job-item">
                <strong style={{ fontSize: '1.1rem', display: 'block' }}>M.Sc. Clinical Psychology</strong>
                <p>Christ University (Delhi NCR)</p>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>2024 - 2026</p>
              </div>
              <div className="job-item">
                <strong style={{ fontSize: '1.1rem', display: 'block' }}>B.Sc. (Hons) Psychology</strong>
                <p>Christ University (Delhi NCR)</p>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>2021 - 2024</p>
              </div>
            </div>
          </div>

          {/* 3. CONTACT BLOCK (Orange) */}
          <div className="bento-box bg-orange">
            <div>
              <h3>Let's Connect</h3>
              <h2>Say Hello!</h2>
            </div>
            <a href="mailto:amisha.verma2112@gmail.com" className="contact-link">
              amisha.verma2112@gmail.com
            </a>
          </div>

          {/* 4. LEADERSHIP BLOCK (Orange) */}
          <div className="bento-box bg-orange">
            <h3>Leadership</h3>
            <div style={{ marginTop: 'auto' }}>
              <h2 style={{ fontSize: '1.5rem' }}>Creative Head</h2>
              <p style={{ opacity: 0.9 }}>Environmental Psychology Club</p>
            </div>
          </div>

          {/* 5. SKILLS BLOCK (Red) */}
          <div className="bento-box col-span-2 bg-red">
            <h3>Core Competencies</h3>
            <div style={{ marginTop: '15px' }}>
              {[
                'Case History Taking', 
                'MSE', 
                'Psychometric Testing', 
                'DSM & ICD Classification', 
                'Research & Scientific Writing', 
                'Community Outreach'
              ].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* 6. EXPERIENCE BLOCK (White) */}
          <div className="bento-box col-span-2 bg-white">
            <h3>Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
              <div>
                <strong>• SPYM (Society for Promotion of Youth & Masses)</strong>
                <p style={{ color: '#555' }}>Motivational interviewing & case history taking (2025)</p>
              </div>
              <div>
                <strong>• Govt. Hospital Jagdalpur</strong>
                <p style={{ color: '#555' }}>Patient interviews & psychometric testing (2023 & 2025)</p>
              </div>
              <div>
                <strong>• Cognizavest</strong>
                <p style={{ color: '#555' }}>Mental Status Examinations training (2022)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;