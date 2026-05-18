import { Link } from 'react-router-dom'
import { homeProjectCards, pageHeroImages, teamActionImages } from '../data/siteMedia'

function Team() {
  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(173, 20, 87, 0.8), rgba(0, 118, 108, 0.62)), url(${pageHeroImages.team})`,
        }}
      >
        <div className="container">
          <h1>Meet Our Core Team</h1>
          <p>The people behind the conversations, memorial spaces, and community programs across the movement.</p>
        </div>
      </section>

      <section className="team-section" style={{ padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', fontWeight: '600' }}>Meet Our Core Team</h2>
          </div>
          <div className="team-grid" style={{ gap: '2.5rem' }}>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Seth</h3>
              <p className="designation">Director</p>
              <p>Leading SLRM with vision and dedication.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Amina</h3>
              <p className="designation">Community Outreach</p>
              <p>Strengthening connections at the grassroots.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Nadia</h3>
              <p className="designation">Project Coordinator</p>
              <p>Ensuring initiatives run smoothly from planning to follow-through.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Shihara</h3>
              <p className="designation">Communications Officer</p>
              <p>Documenting stories and shaping how the movement is seen in public.</p>
            </div>
          </div>

          <div className="photo-grid photo-grid-compact">
            {teamActionImages.map((image) => (
              <figure key={image.title} className="photo-card">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', fontWeight: '600' }}>Project Pages</h2>
          </div>
          <div className="projects-grid" style={{ marginBottom: '3rem' }}>
            {homeProjectCards.slice(0, 2).map((project) => (
              <article key={project.title} className="project-card media-card">
                <div className="project-card-media">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-chip">{project.badge}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link} className="card-link">View Page <i className="fas fa-arrow-right"></i></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="join-box">
            <h2>Join Our Team</h2>
            <p>Support facilitation, outreach, logistics, communications, and the everyday work of keeping communities connected.</p>
            <Link to="/join" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
