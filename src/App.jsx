import React, { useState, useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];

      // 1. Check if we've reached the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('projects');
        return;
      }

      // 2. Check which section is in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // We consider a section active if its top is near the top of the viewport
          // OR if it takes up a significant portion of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Spotlight effect */}
      <div
        className="spotlight-overlay"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <div className="content-wrapper">
        <div className="split-layout">
          {/* LEFT SIDEBAR */}
          <header className="sidebar">
            <div className="sidebar-content">
              <div>
                <h1 className="name-heading">
                  <a href="/">Ravishan Abeygunawardana</a>
                </h1>
                <h2 className="title-heading">
                  Systems Engineer & UI/UX Designer
                </h2>
                <p className="bio-text">
                  I build secure, scalable, and dependable cloud solutions using <span className="highlight">Microsoft Power Platform</span> that keep businesses running smoothly.
                </p>

                <nav className="nav-menu">
                  <ul className="nav-list">
                    <li>
                      <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                        <span className="nav-indicator"></span>About
                      </a>
                    </li>
                    <li>
                      <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
                        <span className="nav-indicator"></span>Experience
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                        <span className="nav-indicator"></span>Projects
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="social-links">
                <a href="https://github.com/ravishan-lk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="social-icon" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/ravishanabey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="social-icon" aria-hidden="true"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
                </a>
              </div>
            </div>
          </header>

          {/* RIGHT CONTENT */}
          <main className="main-content">
            <section id="about" className="section">
              <h3 className="section-title mobile-only">About</h3>
              <div className="prose">
                <p>
                  I'm a Systems Engineer with over <span className="highlight">6 years+ of hands-on experience </span>, specializing in the <span className="highlight">Microsoft Power Platform</span> and modern cloud technologies. I sit at the intersection of cloud engineering and low-code development, building solutions that actually make day-to-day work easier for teams.
                </p>
                <p>
                  My background covers <span className="highlight"> Azure, Microsoft 365, Intune, SCCM, and Power Platform solutions</span>, with a strong focus on creating <span className="highlight">Canvas Apps</span> that solve real operational problems. I enjoy taking business ideas and turning them into clean, user-friendly applications, backed by <span className="highlight">secure, scalable cloud services</span> that are built to last.
                </p>
              </div>
            </section>

            <section id="experience" className="section">
              <h3 className="section-title mobile-only">Experience</h3>
              <ol className="experience-list">
                <li className="experience-item">
                  <div className="exp-date">2022 — 2025 </div>
                  <div className="exp-details">
                    <h4 className="exp-role">Systems Engineer · <span className="highlight">Infront Consulting APAC - Malaysia</span></h4>
                    <p className="exp-desc">supported and led technical solutions across corporate and education environments, with a strong focus on <span className="highlight">Power Platform</span> and
                      <span className="highlight"> Canvas App</span> development. A big part of my work has been designing low-code applications and automations that streamline processes, reduce manual effort, and improve day-to-day operations.</p>
                    <ul className="tech-tags">
                      <li><span className="highlight">Power Platform</span></li>
                      <li><span className="highlight">Canvas App</span></li>
                      <li><span className="highlight">Power Automate</span></li>
                    </ul>
                  </div>
                </li>
                <li className="experience-item">
                  <div className="exp-date">2018 — 2022</div>
                  <div className="exp-details">
                    <h4 className="exp-role">Systems Engineer · <span className="highlight">Infront Consulting - Sri Lanka</span></h4>
                    <p className="exp-desc">involved in<span className="highlight"> Azure </span> and <span className="highlight">Microsoft 365 administration</span>, <span className="highlight">on-prem to cloud migrations</span>, <span className="highlight">Active Directory and identity management</span>, <span className="highlight">Intune and SCCM device deployments</span>, and <span className="highlight">endpoint security improvements</span>. I worked closely with engineers and support teams during migration projects to ensure smooth transitions with minimal disruption, while maintaining system health, reliability, and compliance.</p>
                    <ul className="tech-tags">
                      <li><span className="highlight">Azure</span></li>
                      <li><span className="highlight">Microsoft 365</span></li>
                      <li><span className="highlight">Intune</span></li>
                      <li><span className="highlight">SCCM</span></li>

                    </ul>
                  </div>
                </li>
              </ol>
            </section>

            <section id="projects" className="section">
              <h3 className="section-title mobile-only">Projects</h3>
              <ul className="project-list">
                <li className="project-item">
                  <div className="project-image">
                    <img src="/images/PKT.jpg" alt="PKT EPO Screenshot" className="project-img contain-fit" />
                  </div>
                  <div className="project-details">
                    <h4 className="project-title">Build PKT EPO </h4>
                    <p className="project-desc"> Internal enterprise application developed for PKT Logistics to handle purchase requests, purchase orders, and invoicing workflows. Built using the Microsoft Power Platform, the solution streamlines procurement processes through <span className="highlight">Canvas Apps</span> and <span className="highlight">Power Automate approval flows</span>, providing better visibility, control, and auditability across the organization.</p>
                    <ul className="tech-tags">
                      <li>Canvas App</li>
                      <li>Power Automate</li>
                      <li>Power Bi</li>
                    </ul>
                  </div>
                </li>
                <li className="project-item">
                  <div className="project-image">
                    <img src="/images/insuite.png" alt="inSuite Apps Screenshot" className="project-img" />
                  </div>
                  <div className="project-details">
                    <h4 className="project-title">Created and Managed inSuite Apps</h4>
                    <p className="project-desc">Created and Managed all-in-one digital platform that modernizes SME operations by replacing manual paperwork with automated workflows (like leave and claims), custom mobile apps</p>
                    <ul className="tech-tags">
                      <li>Power Platform</li>
                      <li>Power Automate</li>
                      <li>Power Bi</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>

            <footer className="footer">
              <p>
                Designed in <span className="highlight">Figma</span> and coded in <span className="highlight">Visual Studio Code</span>.<br></br> Built with <span className="highlight">React</span> and <span className="highlight">Vanilla CSS</span>, deployed with <span className="highlight">Vercel</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
