import { Link } from 'react-router-dom'

function Team() {
  return (
    <>
      <section className="team-section" style={{ padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', fontWeight: '600' }}>Meet Our Core Team</h2>
          </div>
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Seth</h3>
              <p className="designation">Director</p>
              <p>Leading SLRM with vision and dedication</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Amina</h3>
              <p className="designation">Community Outreach</p>
              <p>Strengthening connections at the grassroots</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Nadia</h3>
              <p className="designation">Project Coordinator</p>
              <p>Ensuring all initiatives run smoothly</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Shihara</h3>
              <p className="designation">Communications Officer</p>
              <p>Crafting impactful messages</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)', fontWeight: '600' }}>Our Projects</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            <div className="watercolor-card easter">
              <h3>Easter Attacks</h3>
              <Link to="/easter-attacks" className="view-btn">View Page</Link>
            </div>
            <div className="watercolor-card civil-war">
              <h3>Civil War Survivors</h3>
              <Link to="/civil-war-survivors" className="view-btn">View Page</Link>
            </div>
          </div>
          <div className="join-box">
            <h2>Join Our Team</h2>
            <p>Front end only</p>
            <Link to="/join" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
