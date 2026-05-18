import { Link } from 'react-router-dom'
import { pageHeroImages, projectsShowcase, projectsWallImages } from '../data/siteMedia'

function Projects() {
  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(173, 20, 87, 0.78), rgba(232, 119, 34, 0.66)), url(${pageHeroImages.projects})`,
        }}
      >
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
            <h2>Programs in Action</h2>
            <p>Local photo documentation from the dialogues, memorial spaces, workshops, and outreach that shape the movement.</p>
          </div>
          <div className="projects-grid">
            {projectsShowcase.map((project) => (
              <article key={project.title} className="project-card media-card">
                <div className="project-card-media">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-chip">{project.badge}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  {project.link ? (
                    <Link to={project.link} className="card-link">{project.cta} <i className="fas fa-arrow-right"></i></Link>
                  ) : (
                    <span className="card-link card-link-muted">Community program</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-content" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Across the Movement</h2>
            <p>Work happens in many formats, but it is always rooted in relationship, listening, and public presence.</p>
          </div>
          <div className="photo-grid">
            {projectsWallImages.map((image) => (
              <figure key={image.title} className="photo-card">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
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
