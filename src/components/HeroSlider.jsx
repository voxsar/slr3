import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: 'Building Bridges of Peace',
    text: 'Working together to heal communities and foster reconciliation across Sri Lanka',
    btnText: 'Learn More',
    btnLink: '/about',
  },
  {
    title: 'Supporting Survivors',
    text: 'Providing hope and healing to those affected by conflict',
    btnText: 'Our Projects',
    btnLink: '/projects',
  },
  {
    title: 'Join the Movement',
    text: 'Be part of positive change and lasting peace',
    btnText: 'Get Involved',
    btnLink: '/join',
  },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }

  const goTo = (idx) => setCurrent(idx)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, idx) => (
          <div key={idx} className={`slide${current === idx ? ' active' : ''}`}>
            <div className="slide-content">
              <div className="container">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-text">{slide.text}</p>
                <Link to={slide.btnLink} className="btn-primary">{slide.btnText}</Link>
              </div>
            </div>
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>
      <button className="slider-btn prev" onClick={prev} aria-label="Previous slide">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-btn next" onClick={next} aria-label="Next slide">
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot${current === idx ? ' active' : ''}`}
            onClick={() => goTo(idx)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
