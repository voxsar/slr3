import { Link } from 'react-router-dom'

function Join() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Be part of the movement for peace and reconciliation</p>
        </div>
      </section>

      <section className="join-content">
        <div className="container">
          {/* Make a Difference - left aligned */}
          <div className="join-intro text-left">
            <h2>Make a Difference</h2>
            <p>The Sri Lanka Reconciliation Movement thrives because of dedicated individuals who share our vision of a peaceful, inclusive Sri Lanka. Whether you can offer a few hours a week or are looking for a career in peacebuilding, there&apos;s a place for you in our movement.</p>
            <p>Join us in creating lasting change and building bridges of understanding across communities.</p>
          </div>

          <div className="section-header">
            <h2>Ways to Get Involved</h2>
          </div>

          <div className="opportunities-grid">
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-hands-helping"></i></div>
              <h3>Volunteer</h3>
              <p>Contribute your time and skills to support our programs. Opportunities include event coordination, community outreach, administrative support, translation services, and direct program implementation.</p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Flexible time commitments</li>
                <li>Training provided</li>
                <li>Make direct impact</li>
              </ul>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-briefcase"></i></div>
              <h3>Join Our Staff</h3>
              <p>Build a career in peacebuilding with us. We regularly seek passionate professionals in program management, counseling, community organizing, communications, and administration.</p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Competitive compensation</li>
                <li>Professional development</li>
                <li>Meaningful work</li>
              </ul>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-chalkboard-teacher"></i></div>
              <h3>Become a Facilitator</h3>
              <p>Lead dialogue sessions, workshops, and training programs. We seek experienced facilitators in conflict resolution, trauma counseling, and community development.</p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Specialized training</li>
                <li>Flexible schedule</li>
                <li>Community impact</li>
              </ul>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-users"></i></div>
              <h3>Youth Ambassador</h3>
              <p>Young people aged 18-25 can join our Youth Ambassador program, representing our movement in schools and universities while developing leadership skills.</p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Leadership training</li>
                <li>Networking opportunities</li>
                <li>Certificate program</li>
              </ul>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-handshake"></i></div>
              <h3>Partner Organization</h3>
              <p>Organizations working in related fields can collaborate with us on joint programs, resource sharing, and community initiatives.</p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Collaborative projects</li>
                <li>Shared resources</li>
                <li>Expanded reach</li>
              </ul>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-heart"></i></div>
              <h3>Support Our Mission</h3>
              <p>Financial supporters enable our programs to reach more communities. One-time or monthly donations, sponsorships, and in-kind contributions are all welcome.</p>
              <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                <li>Tax-deductible</li>
                <li>Regular updates</li>
                <li>Direct impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-content" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="content-section">
            <h2>What We Look For</h2>
            <p>While specific roles have different requirements, all members of our team share certain qualities:</p>
            <ul>
              <li><strong>Commitment to Peace:</strong> A genuine passion for reconciliation and conflict resolution</li>
              <li><strong>Cultural Sensitivity:</strong> Respect for and understanding of Sri Lanka&apos;s diverse communities</li>
              <li><strong>Empathy:</strong> Ability to work compassionately with trauma survivors</li>
              <li><strong>Collaboration:</strong> Willingness to work as part of a diverse team</li>
              <li><strong>Integrity:</strong> Commitment to ethical practice and transparency</li>
              <li><strong>Resilience:</strong> Ability to work in challenging circumstances while maintaining self-care</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>How to Apply</h2>
            <p>Interested in joining us? Here&apos;s how to get started:</p>
            <ol style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-gray)', paddingLeft: '2rem' }}>
              <li><strong>Review Opportunities:</strong> Check our current openings and volunteer positions</li>
              <li><strong>Submit Application:</strong> Fill out our online application form with your information and interests</li>
              <li><strong>Interview:</strong> Selected candidates will be invited for a conversation with our team</li>
              <li><strong>Orientation:</strong> New team members participate in an orientation and training program</li>
              <li><strong>Get Started:</strong> Begin making a difference in communities across Sri Lanka</li>
            </ol>
          </div>

          <div className="join-intro">
            <h2>Ready to Join Us?</h2>
            <p>Start your journey with the Sri Lanka Reconciliation Movement today. Whether you have a few hours to volunteer or are seeking a full-time position, we&apos;d love to hear from you.</p>
            <Link to="/#contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="project-content" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Voices from Our Team</h2>
            <p>Hear from those who&apos;ve joined the movement</p>
          </div>
          <div className="projects-grid">
            <div className="project-card" style={{ borderTopColor: 'var(--primary-green)' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>&ldquo;Volunteering with the Reconciliation Movement has been the most meaningful experience of my life. Seeing communities come together and heal has renewed my hope for Sri Lanka&apos;s future.&rdquo;</p>
              <p style={{ color: 'var(--primary-maroon)', fontWeight: '600' }}>- Volunteer, Community Outreach</p>
            </div>
            <div className="project-card" style={{ borderTopColor: 'var(--primary-green)' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>&ldquo;Working here isn&apos;t just a job—it&apos;s a calling. Every day, I witness the power of compassion and dialogue to transform lives and communities.&rdquo;</p>
              <p style={{ color: 'var(--primary-maroon)', fontWeight: '600' }}>- Program Coordinator</p>
            </div>
            <div className="project-card" style={{ borderTopColor: 'var(--primary-green)' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>&ldquo;The Youth Ambassador program gave me skills, confidence, and a network of young peacebuilders. I&apos;m now a leader in my community.&rdquo;</p>
              <p style={{ color: 'var(--primary-maroon)', fontWeight: '600' }}>- Youth Ambassador</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Join
