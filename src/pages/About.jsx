import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Meet the passionate team dedicated to healing and reconciliation in Sri Lanka</p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>Our Story</h2>
            <p>The Sri Lanka Reconciliation Movement was born from the shared vision of individuals who witnessed firsthand the devastating impact of conflict on communities across our nation. Founded in the aftermath of decades of civil strife and recent violence, our movement represents a grassroots commitment to healing, understanding, and lasting peace.</p>
            <p>We believe that reconciliation is not just about remembering the past—it&apos;s about actively building a future where every Sri Lankan, regardless of ethnicity, religion, or background, can live with dignity, security, and hope. Our work is guided by the voices of survivors, the wisdom of community leaders, and the unwavering belief that peace is possible when we choose compassion over division.</p>
          </div>
          <div className="content-section">
            <h2>Our Mission</h2>
            <p>To facilitate healing and reconciliation across Sri Lankan communities affected by conflict through compassionate support, inclusive dialogue, and sustainable empowerment programs that honor the dignity of every individual and foster lasting peace.</p>
          </div>
          <div className="content-section">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Compassion:</strong> We approach every interaction with empathy and understanding</li>
              <li><strong>Inclusivity:</strong> We welcome and honor all voices, backgrounds, and perspectives</li>
              <li><strong>Dignity:</strong> We uphold the inherent worth of every human being</li>
              <li><strong>Transparency:</strong> We operate with honesty and accountability</li>
              <li><strong>Hope:</strong> We believe in the possibility of healing and positive change</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Core Team</h2>
            <p>Dedicated individuals working tirelessly for peace and reconciliation</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Seth Fernando</h3>
              <p className="designation">Executive Director &amp; Founder</p>
              <p>Seth brings over 15 years of experience in peacebuilding and community development. A survivor of the civil war, he founded the movement to create meaningful pathways for healing and reconciliation across divided communities.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Amina Rasheed</h3>
              <p className="designation">Director of Programs</p>
              <p>Amina oversees all our reconciliation programs with a focus on trauma-informed care. Her background in clinical psychology and community organizing ensures our initiatives are both compassionate and effective in supporting survivors.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Nadia Wijesinghe</h3>
              <p className="designation">Community Outreach Coordinator</p>
              <p>Nadia bridges communities across Sri Lanka, facilitating dialogue and building trust between diverse groups. Her multilingual skills and deep cultural understanding make her invaluable in fostering genuine connections and understanding.</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><i className="fas fa-user"></i></div>
              <h3>Shihara Perera</h3>
              <p className="designation">Youth Engagement &amp; Education Lead</p>
              <p>Shihara leads our youth initiatives, empowering the next generation to become agents of peace. Through educational programs and youth dialogues, she&apos;s helping young Sri Lankans build a more inclusive future together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-content" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Impact</h2>
            <p>Creating meaningful change through dedicated action</p>
          </div>
          <div className="impact-stats">
            <div className="stat-card"><div className="stat-number">2,500+</div><div className="stat-label">Survivors Supported</div></div>
            <div className="stat-card"><div className="stat-number">45</div><div className="stat-label">Communities Reached</div></div>
            <div className="stat-card"><div className="stat-number">120</div><div className="stat-label">Dialogue Sessions</div></div>
            <div className="stat-card"><div className="stat-number">350+</div><div className="stat-label">Volunteers</div></div>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="join-intro">
            <h2>Join Us in Building Peace</h2>
            <p>Whether through volunteering, partnership, or support, there are many ways to contribute to our mission of reconciliation and healing. Together, we can create a Sri Lanka where peace prevails.</p>
            <Link to="/join" className="btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
