import { Link } from 'react-router-dom'

function CivilWarSurvivors() {
  return (
    <>
      <section className="project-hero">
        <div className="container">
          <h1>Civil War Survivors Support Program</h1>
          <p className="subtitle">Healing wounds and building futures for those affected by decades of conflict</p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>About This Program</h2>
            <p>Sri Lanka&apos;s civil war, which spanned nearly three decades from 1983 to 2009, left profound scars on the nation. Hundreds of thousands lost their lives, families were torn apart, communities were destroyed, and entire generations grew up knowing only conflict. Even years after the war&apos;s end, survivors continue to grapple with trauma, loss, displacement, and the challenge of rebuilding their lives.</p>
            <p>Our Civil War Survivors Support Program is one of our most comprehensive initiatives, recognizing that healing from such prolonged conflict requires sustained, multifaceted support. We work across the country—in the North, East, and conflict-affected areas throughout Sri Lanka—to provide holistic care that addresses the deep wounds of war while fostering reconciliation between communities.</p>
            <p>This program is built on a foundation of survivor voices and community leadership. We don&apos;t impose solutions; we listen, we support, and we walk alongside those who have experienced unimaginable loss as they chart their own paths toward healing and hope.</p>
          </div>

          <div className="impact-stats">
            <div className="stat-card"><div className="stat-number">3,200+</div><div className="stat-label">Survivors Supported</div></div>
            <div className="stat-card"><div className="stat-number">52</div><div className="stat-label">Communities Reached</div></div>
            <div className="stat-card"><div className="stat-number">1,400+</div><div className="stat-label">Counseling Sessions</div></div>
            <div className="stat-card"><div className="stat-number">280</div><div className="stat-label">Livelihood Programs</div></div>
          </div>

          <div className="content-section">
            <h2>Who We Serve</h2>
            <p>Our program supports diverse groups affected by the civil war:</p>
            <ul>
              <li>War widows and widowers rebuilding their lives</li>
              <li>Families of the disappeared seeking truth and closure</li>
              <li>Former combatants reintegrating into civilian life</li>
              <li>Children orphaned or separated from families during conflict</li>
              <li>Internally displaced persons returning to their communities</li>
              <li>Torture and detention survivors carrying physical and psychological scars</li>
              <li>Communities working to rebuild social cohesion after years of division</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-section" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Comprehensive Services</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-heart"></i></div>
              <h3>Psychosocial Support</h3>
              <p>Individual and group counseling for trauma, PTSD, grief, and depression. Our culturally-sensitive approach combines Western therapeutic methods with local healing practices.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-home"></i></div>
              <h3>Livelihood &amp; Economic Empowerment</h3>
              <p>Vocational training, microloans, business development support, and employment assistance to help survivors achieve economic independence and stability.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-comments"></i></div>
              <h3>Community Dialogue</h3>
              <p>Facilitated conversations between Sinhalese, Tamil, and Muslim communities to address historical grievances, build mutual understanding, and foster reconciliation.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-search"></i></div>
              <h3>Truth &amp; Accountability Support</h3>
              <p>Assisting families of the disappeared in their search for answers, providing legal support, and advocating for truth, justice, and accountability.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-hands"></i></div>
              <h3>Women&apos;s Empowerment</h3>
              <p>Specialized programs for war widows and female-headed households, including skills training, cooperatives, and leadership development.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Educational Support</h3>
              <p>Scholarships, tutoring, and school supplies for children of survivors, ensuring the next generation has opportunities despite the war&apos;s legacy.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-hospital"></i></div>
              <h3>Healthcare Access</h3>
              <p>Connecting survivors with medical services, providing health insurance assistance, and organizing mobile health clinics in remote areas.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-leaf"></i></div>
              <h3>Traditional Healing</h3>
              <p>Integrating traditional and spiritual healing practices that resonate with local communities, including meditation, rituals, and community ceremonies.</p>
            </div>
            <div className="project-card">
              <div className="card-icon"><i className="fas fa-seedling"></i></div>
              <h3>Reintegration Programs</h3>
              <p>Supporting former combatants in their transition to civilian life through counseling, skills training, and community acceptance initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="content-section">
            <h2>Voices of Healing</h2>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', borderLeft: '4px solid var(--primary-maroon)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              &ldquo;I lost my husband in the final days of the war, leaving me alone with three young children. For years, I survived but didn&apos;t truly live. The Reconciliation Movement helped me start a small tailoring business through their microloan program. Now I&apos;m not just surviving—I&apos;m thriving, and my children have hope for their future. More importantly, through the support groups, I found community and purpose again.&rdquo; - Janani, War Widow
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', borderLeft: '4px solid var(--primary-maroon)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              &ldquo;My son disappeared during the war. For 15 years, I had no answers. The program connected me with other families of the disappeared. Together, we&apos;ve found strength and companionship in our search for truth. They&apos;ve also provided legal support as we navigate the system. I may never get my son back, but at least now I&apos;m not alone in my pain.&rdquo; - Thevanai, Mother
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-gray)', borderLeft: '4px solid var(--primary-maroon)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              &ldquo;I fought in the war on one side, my neighbor on the other. After it ended, we couldn&apos;t even look at each other. The community dialogue sessions were uncomfortable at first, but they gave us space to share our pain, our regrets, our humanity. Today, we work together on community projects. Reconciliation is hard, but it&apos;s possible.&rdquo; - Kumar, Former Combatant
            </p>
          </div>

          <div className="content-section">
            <h2>Our Approach: Healing at Multiple Levels</h2>
            <p>Effective reconciliation work must address healing at individual, community, and societal levels simultaneously:</p>
            <h3 style={{ color: 'var(--primary-maroon)', marginTop: '2rem' }}>Individual Level</h3>
            <p>Providing trauma counseling, healthcare, and economic support to help individuals process their experiences and rebuild their lives with dignity.</p>
            <h3 style={{ color: 'var(--primary-maroon)', marginTop: '2rem' }}>Community Level</h3>
            <p>Facilitating dialogue, supporting community-led initiatives, and rebuilding social fabric torn apart by conflict through shared projects and mutual understanding.</p>
            <h3 style={{ color: 'var(--primary-maroon)', marginTop: '2rem' }}>Societal Level</h3>
            <p>Advocating for truth, justice, and accountability; influencing policy; and working toward structural changes that address root causes of conflict.</p>
          </div>

          <div className="content-section">
            <h2>Challenges &amp; Commitment</h2>
            <p>The work of healing from such profound conflict is neither quick nor easy. Survivors face ongoing challenges:</p>
            <ul>
              <li>Persistent trauma symptoms that affect daily functioning</li>
              <li>Economic hardship and poverty in war-affected regions</li>
              <li>Ongoing militarization in some areas creating feelings of insecurity</li>
              <li>Lack of truth and accountability for war crimes</li>
              <li>Stigma and discrimination faced by certain survivor groups</li>
              <li>Inter-community tensions that occasionally resurface</li>
            </ul>
            <p>Despite these challenges, we remain committed to this essential work. Every survivor deserves support, every community deserves peace, and every Sri Lankan deserves a future free from the shadows of conflict.</p>
          </div>

          <div className="join-intro">
            <h2>Support This Vital Work</h2>
            <p>The journey toward full reconciliation requires sustained commitment and resources. Your support—whether through donations, volunteering, or advocacy—directly impacts the lives of thousands of war survivors working to rebuild their lives and communities.</p>
            <Link to="/join" className="btn-primary">Get Involved</Link>
            <Link to="/#contact" className="btn-secondary" style={{ marginLeft: '1rem' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CivilWarSurvivors
