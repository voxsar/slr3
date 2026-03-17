import { Link } from 'react-router-dom'

function EasterAttacks() {
  return (
    <>
      <section className="project-hero">
        <div className="container">
          <h1>Easter Attacks Recovery Program</h1>
          <p className="subtitle">Supporting survivors and families in their journey toward healing and hope</p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>About This Program</h2>
            <p>On Easter Sunday 2019, coordinated terrorist attacks on churches and hotels across Sri Lanka killed over 250 people and injured hundreds more. The devastating attacks left deep scars on families, communities, and the nation as a whole.</p>
            <p>Our Easter Attacks Recovery Program was established in the immediate aftermath to provide comprehensive, long-term support to survivors and affected families. We recognized that healing from such trauma requires sustained, compassionate care that addresses physical, psychological, spiritual, and economic needs.</p>
            <p>Through trauma-informed counseling, community rebuilding initiatives, interfaith dialogue, and practical support services, we walk alongside survivors on their journey toward recovery and resilience.</p>
          </div>

          <div className="impact-stats">
            <div className="stat-card"><div className="stat-number">380+</div><div className="stat-label">Survivors Supported</div></div>
            <div className="stat-card"><div className="stat-number">120</div><div className="stat-label">Families Assisted</div></div>
            <div className="stat-card"><div className="stat-number">850+</div><div className="stat-label">Counseling Sessions</div></div>
            <div className="stat-card"><div className="stat-number">15</div><div className="stat-label">Community Dialogues</div></div>
          </div>
        </div>
      </section>

      <section className="projects-section" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>The Easter Attacks Recovery Program offers a range of integrated services designed to address the complex needs of survivors:</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-user-md"></i></div>
              <h3>Trauma Counseling</h3>
              <p>Professional, culturally-sensitive psychological support for individuals and families dealing with PTSD, grief, anxiety, and depression resulting from the attacks.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-people-carry"></i></div>
              <h3>Peer Support Groups</h3>
              <p>Facilitated groups where survivors can share experiences, find solidarity, and build community with others who understand their journey.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-hand-holding-usd"></i></div>
              <h3>Economic Support</h3>
              <p>Financial assistance, vocational training, and livelihood programs to help families achieve economic stability after losing breadwinners or experiencing economic hardship.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-praying-hands"></i></div>
              <h3>Interfaith Dialogue</h3>
              <p>Bringing together faith leaders and communities to promote understanding, counter extremism, and build bridges of peace between religious groups.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-child"></i></div>
              <h3>Children&apos;s Programs</h3>
              <p>Specialized support for children affected by the attacks, including play therapy, educational support, and programs to help them process trauma and build resilience.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-balance-scale"></i></div>
              <h3>Legal Assistance</h3>
              <p>Support navigating legal processes, accessing compensation, and advocating for survivors&apos; rights in the justice system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>Stories of Resilience</h2>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', borderLeft: '4px solid var(--primary-orange)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              &ldquo;I lost my husband in the attacks. For months, I couldn&apos;t sleep, couldn&apos;t eat, couldn&apos;t care for my children. The counselors from the Reconciliation Movement visited me every week. They never gave up on me. Slowly, with their support and the peer group, I found strength I didn&apos;t know I had. Today, I&apos;m rebuilding my life and even helping other survivors. They gave me back my hope.&rdquo; - Priya, Survivor
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', borderLeft: '4px solid var(--primary-orange)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              &ldquo;As a father who lost his son, I was filled with anger and hatred. The interfaith dialogue sessions were hard at first, but they helped me see that the attackers don&apos;t represent any true faith. Meeting Muslim leaders who condemned the violence and mourned with us began my healing. Now I speak at schools about peace.&rdquo; - Rohan, Father
            </p>
          </div>

          <div className="content-section">
            <h2>Our Approach</h2>
            <p>Our work is guided by key principles that ensure effective, respectful support:</p>
            <ul>
              <li><strong>Survivor-Centered:</strong> Programs are designed around the expressed needs and wishes of survivors</li>
              <li><strong>Trauma-Informed:</strong> All staff are trained in trauma-informed care practices</li>
              <li><strong>Long-Term Commitment:</strong> We provide sustained support for as long as survivors need it</li>
              <li><strong>Holistic Care:</strong> Addressing psychological, physical, spiritual, and economic dimensions of recovery</li>
              <li><strong>Community-Based:</strong> Working within affected communities to rebuild social fabric</li>
              <li><strong>Dignity &amp; Respect:</strong> Honoring the courage and resilience of every survivor</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Looking Forward</h2>
            <p>While significant progress has been made, the journey toward full recovery continues. Many survivors still struggle with trauma symptoms, economic hardship, and social challenges. Our commitment remains steadfast.</p>
            <p>In the coming years, we plan to expand our peer support groups, launch a scholarship program for children who lost parents, and continue our interfaith work to prevent future violence. We also advocate for comprehensive government support and policies that address the long-term needs of terrorism survivors.</p>
          </div>

          <div className="join-intro">
            <h2>Support This Program</h2>
            <p>Your support enables us to continue walking alongside survivors in their healing journey. Whether through donations, volunteering, or raising awareness, you can make a difference in the lives of those affected by the Easter attacks.</p>
            <Link to="/join" className="btn-primary">Get Involved</Link>
            <Link to="/#contact" className="btn-secondary" style={{ marginLeft: '1rem' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default EasterAttacks
