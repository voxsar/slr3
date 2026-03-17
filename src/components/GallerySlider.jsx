import { useState, useEffect, useCallback } from 'react'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80', alt: 'Community gathering' },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80', alt: 'Peace candles' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', alt: 'Sri Lanka landscape' },
  { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80', alt: 'Community support' },
  { src: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&q=80', alt: 'People of Sri Lanka' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Nature and peace' },
]

function GallerySlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % galleryImages.length)
  }, [])

  const prev = () => {
    setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length)
  }

  const goTo = (idx) => setCurrent(idx)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="gallery-slider">
      <div className="gallery-slider-track">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`gallery-slide${current === idx ? ' active' : ''}`}
          >
            <img src={img.src} alt={img.alt} className="gallery-slide-img" />
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
        {galleryImages.map((_, idx) => (
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
