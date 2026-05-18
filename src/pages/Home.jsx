import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import GallerySlider from '../components/GallerySlider'
import { useEffect, useRef } from 'react'
import {
  homeFeaturedProject,
  homeJourneyImages,
  homeProjectCards,
  homeWhoWeAreImage,
} from '../data/siteMedia'

function Home() {
  const formRef = useRef(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  useEffect(() => {
    // Scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const animatedEls = document.querySelectorAll('[data-reveal]')
    animatedEls.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroSlider />

      {/* Featured Project */}
      <section className="featured-project" id="featured">
        <div className="container">
          <div className="featured-content">
            <div className="featured-image" data-reveal>
              <figure className="feature-figure">
                <img src={homeFeaturedProject.image} alt={homeFeaturedProject.alt} loading="lazy" />
              </figure>
            </div>
            <div className="featured-text">
              <span className="label">{homeFeaturedProject.label}</span>
              <h2>{homeFeaturedProject.title}</h2>
              <p>{homeFeaturedProject.description}</p>
              <Link to={homeFeaturedProject.link} className="btn-secondary">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>Creating lasting change through focused initiatives</p>
          </div>
          <div className="projects-grid">
            {homeProjectCards.map((project) => (
              <article key={project.title} className="project-card media-card" data-reveal>
                <div className="project-card-media">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-chip">{project.badge}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link} className="card-link">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are" id="about">
        <div className="container">
          <div className="who-content">
            <div className="who-text">
              <h2>Who We Are</h2>
              <p>The Sri Lanka Reconciliation Movement is a grassroots organization dedicated to healing the wounds of conflict and building bridges between communities. Founded by survivors and peacebuilders, we believe in the power of compassion, dialogue, and collective action to create lasting change.</p>
              <p>Our team works tirelessly across the country, bringing together people from all backgrounds to foster understanding, provide support to those affected by violence, and build a future where every Sri Lankan can live in peace and dignity.</p>
              <Link to="/about" className="btn-secondary">Meet Our Team <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="who-image" data-reveal>
              <figure className="feature-figure feature-figure--short">
                <img src={homeWhoWeAreImage.src} alt={homeWhoWeAreImage.alt} loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-header">
            <h2>Our Gallery</h2>
            <p>Moments from our work across communities in Sri Lanka</p>
          </div>
          <GallerySlider />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="instagram-feed">
        <div className="container">
          <div className="section-header">
            <h2>Follow Our Journey</h2>
            <p>Stay connected with our work on Instagram</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-handle">
              <i className="fab fa-instagram"></i> @srilanka_reconciliation
            </a>
          </div>
          <div className="instagram-grid">
            {homeJourneyImages.map((item) => (
              <article key={item.title} className="instagram-post image-post" data-reveal>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="journey-caption">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions or want to get involved? We&apos;d love to hear from you.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div><h4>Email</h4><p>info@slreconciliation.org</p></div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div><h4>Phone</h4><p>+94 11 234 5678</p></div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div><h4>Address</h4><p>Colombo, Sri Lanka</p></div>
                </div>
              </div>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="contact-form">
              <form ref={formRef} onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
