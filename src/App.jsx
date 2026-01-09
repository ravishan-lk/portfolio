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
      const sections = ['about', 'experience', 'certifications', 'projects'];

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

  const certifications = [
    {
      title: "Microsoft Certified: Power Platform Developer Associate",
      number: "43E9W9-53F399",
      date: "Earned on Dec 20, 2022"
    },
    {
      title: "Microsoft 365 Certified: Teams Administrator Associate",
      number: "60595J-C32563",
      date: "Earned on Jan 16, 2021"
    },
    {
      title: "Microsoft 365 Certified: Administrator Expert",
      number: "B5A84Z-7A09EB",
      date: "Earned on Jan 16, 2021"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      number: "248ECE-4JE210",
      date: "Earned on Sep 25, 2019"
    },
    {
      title: "MCSE: Core Infrastructure",
      number: "D394B3-11A22E",
      date: ""
    },
    {
      title: "MCSA: Windows Server 2016",
      number: "16953F-D3933E",
      date: ""
    },
    {
      title: "Microsoft Certified Professional",
      number: "P2C044-3E4C5D",
      date: ""
    }
  ];

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
                      <a href="#certifications" className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}>
                        <span className="nav-indicator"></span>Certifications
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
                  I’m a <span className="highlight">Systems Engineer</span> with over <span className="highlight">6 years of hands-on experience</span> in building scalable, enterprise-grade digital solutions. I specialize in bridging the gap between complex business requirements and high-performance automation, ensuring every app I build is as intuitive as it is robust.
                </p>
                <p>
                  Currently, I focus on architecting end-to-end ecosystems using <span className="highlight">Power Apps (Canvas & Model-Driven)</span> and <span className="highlight">Power Automate</span>. From mastering advanced <span className="highlight">Power Fx</span> and <span className="highlight">PCF controls</span> to managing complex <span className="highlight">Dataverse</span> architectures, my goal is to deliver seamless user experiences backed by iron-clad security and governance. I’m particularly passionate about <span className="highlight">ALM (Application Lifecycle Management)</span>, ensuring smooth deployments across Dev, Test, and Prod environments using GitHub and Azure DevOps.
                </p>
                <p>
                  In the past, I’ve had the privilege of driving digital transformation for large-scale organizations with massive user bases (<span className="highlight">2,000+ users</span>), including industry leaders like <span className="highlight">PKT Logistics Group</span> (recognized as Malaysia's Best Managed Company for 2025). My background isn’t just limited to low-code; I bring deep technical expertise in <span className="highlight">Azure & Microsoft 365 Administration, Intune, and SCCM</span>, which allows me to view the Power Platform through the lens of enterprise infrastructure and security.
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
                      <li>Canvas App</li>
                      <li>Power Automate</li>
                      <li>Power Platform</li>
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

            <section id="certifications" className="section">
              <h3 className="section-title mobile-only">Certifications</h3>
              <div className="certification-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="experience-item certification-item">
                    <div className="exp-date" style={{ whiteSpace: 'nowrap' }}>{cert.number}</div>
                    <div className="exp-details">
                      <h4 className="exp-role">{cert.title}</h4>
                      {cert.date && <p className="exp-desc" style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{cert.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
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
                    <img src="/images/insuite.jpg" alt="inSuite Apps Screenshot" className="project-img" />
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
                <li className="project-item">
                  <div className="project-image">
                    <img src="/images/CBR.jpg" alt="CBR Hotels Project" className="project-img" />
                  </div>
                  <div className="project-details">
                    <h4 className="project-title">CBR Hotels – Maldives</h4>
                    <p className="project-desc">Executed a full-scale <span className="highlight">Active Directory (AD) Migration</span> and managed the directory services infrastructure. This included optimizing the AD environment through complex <span className="highlight">Group Policy Object (GPO)</span> configurations, <span className="highlight">Organizational Unit (OU)</span> structuring, and ensuring high-availability identity management for critical enterprise operations.</p>
                    <ul className="tech-tags">
                      <li>Windows Server 2008 R2</li>
                      <li>Windows Server 2012 R2</li>
                      <li>Windows Server 2016</li>
                    </ul>
                  </div>
                </li>
                <li className="project-item">
                  <div className="project-image">
                    <img src="/images/Firbank.jpg" alt="Firbank Grammar Project" className="project-img" />
                  </div>
                  <div className="project-details">
                    <h4 className="project-title">Firbank Grammar School – Australia</h4>
                    <p className="project-desc">Orchestrated the migration of an on-premises <span className="highlight">Windows Server 2016 Active Directory</span> environment supporting <span className="highlight">1,500+ users</span> to <span className="highlight">Azure AD (Entra ID)</span>. This technical transition included the full deployment of <span className="highlight">Microsoft Intune</span> for centralized mobile device management (MDM) and endpoint security, ensuring a modern, cloud-first identity and access management framework.</p>
                    <ul className="tech-tags">
                      <li>Azure</li>
                      <li>Entra ID</li>
                      <li>Azure Connect</li>
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
