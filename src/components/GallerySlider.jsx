import { useState, useEffect, useCallback } from 'react'
import { homeGalleryImages } from '../data/siteMedia'

function GallerySlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % homeGalleryImages.length)
  }, [])

  const prev = () => {
    setCurrent((c) => (c - 1 + homeGalleryImages.length) % homeGalleryImages.length)
  }

  const goTo = (idx) => setCurrent(idx)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="gallery-slider">
      <div className="gallery-slider-track">
        {homeGalleryImages.map((img, idx) => (
          <div
            key={img.title}
            className={`gallery-slide${current === idx ? ' active' : ''}`}
          >
            <img src={img.src} alt={img.alt} className="gallery-slide-img" />
            <div className="gallery-slide-caption">
              <span>{img.title}</span>
              <strong>{img.caption}</strong>
            </div>
          </div>
        ))}
      </div>
      <button className="gallery-btn gallery-btn-prev" onClick={prev} aria-label="Previous image">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="gallery-btn gallery-btn-next" onClick={next} aria-label="Next image">
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="gallery-dots">
        {homeGalleryImages.map((_, idx) => (
          <span
            key={idx}
            className={`dot${current === idx ? ' active' : ''}`}
            onClick={() => goTo(idx)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default GallerySlider
