import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Creating lasting change through focused initiatives across Sri Lanka</p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>Building Peace Through Action</h2>
            <p>Our projects are designed to address the complex needs of communities affected by conflict. From trauma counseling to economic empowerment, from youth education to inter-community dialogue, we work holistically to create environments where healing and reconciliation can flourish.</p>
            <p>Each initiative is grounded in the voices and needs of the communities we serve, ensuring that our work is both relevant and impactful. We believe in sustainable, community-led solutions that honor the dignity and resilience of survivors.</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Major Initiatives</h2>
            <p>Our flagship programs making a lasting impact</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-dove"></i></div>
              <h3>Easter Attacks Recovery Program</h3>
              <p>Comprehensive support for victims and families affected by the 2019 Easter attacks, including trauma counseling, community rebuilding, and interfaith dialogue initiatives to promote healing and prevent future violence.</p>
              <Link to="/easter-attacks" className="card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-heart"></i></div>
              <h3>Civil War Survivors Support</h3>
              <p>Providing holistic support to those affected by decades of civil war through counseling services, economic empowerment programs, community building activities, and advocacy for survivors&apos; rights and needs.</p>
              <Link to="/civil-war-survivors" className="card-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-comments"></i></div>
              <h3>Community Dialogue Forums</h3>
              <p>Facilitating safe spaces for honest conversations between diverse communities, addressing historical grievances, building mutual understanding, and developing collaborative solutions for shared challenges.</p>
              <a href="#dialogue" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Youth Peace Education</h3>
              <p>Empowering young people to become peacebuilders through education programs, leadership training, and inter-ethnic youth camps that foster understanding and cooperation among the next generation.</p>
              <a href="#youth" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-hands-helping"></i></div>
              <h3>Women&apos;s Empowerment Initiative</h3>
              <p>Supporting women affected by conflict through skills training, microfinance programs, and leadership development, recognizing women as crucial agents of peace and reconciliation in their communities.</p>
              <a href="#women" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-book-open"></i></div>
              <h3>Memory &amp; Documentation Project</h3>
              <p>Preserving the stories and experiences of conflict survivors, creating a historical record that honors victims, promotes truth-telling, and serves as a foundation for lasting reconciliation.</p>
              <a href="#memory" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="project-content" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Collective Impact</h2>
            <p>Measuring change across all our initiatives</p>
          </div>
          <div className="impact-stats">
            <div className="stat-card"><div className="stat-number">4,200+</div><div className="stat-label">Individuals Reached</div></div>
            <div className="stat-card"><div className="stat-number">67</div><div className="stat-label">Communities Served</div></div>
            <div className="stat-card"><div className="stat-number">185</div><div className="stat-label">Programs Conducted</div></div>
            <div className="stat-card"><div className="stat-number">12</div><div className="stat-label">Districts Covered</div></div>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>Our Approach</h2>
            <p>All our projects are guided by core principles that ensure effectiveness and sustainability:</p>
            <ul>
              <li><strong>Community-Led:</strong> Local communities drive our initiatives, ensuring relevance and ownership</li>
              <li><strong>Trauma-Informed:</strong> All our work recognizes the impact of trauma and promotes healing</li>
              <li><strong>Inclusive:</strong> We actively include marginalized voices and diverse perspectives</li>
              <li><strong>Collaborative:</strong> We partner with local organizations, government agencies, and international partners</li>
              <li><strong>Evidence-Based:</strong> Our programs are informed by research and best practices in peacebuilding</li>
              <li><strong>Sustainable:</strong> We build local capacity for long-term impact beyond our direct involvement</li>
            </ul>
          </div>
          <div className="join-intro">
            <h2>Support Our Work</h2>
            <p>Every project depends on the generosity and commitment of supporters like you. Whether through volunteering, donations, or partnership, your involvement makes our work possible.</p>
            <Link to="/join" className="btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
