import { useEffect, useMemo, useRef, useState } from 'react'

const artworks = [
  {
    id: 'affiche',
    title: 'Héritage',
    category: 'Freelance',
    year: '2026',
    images: [
      '/image/a69cbb1a-174f-4bc8-8a79-e7e2a3a4f0dc_rw_1920-1.png',
      '/image/trio2.png',
      '/image/letrio1.png',
    ],
    description:
      "Affiche pour l'association Héritage pour un événement costumé, avec pour contrainte de tout faire en illustration.",
  },
  {
    id: 'jeu-de-societe',
    title: 'Jeu de société',
    category: 'Freelance',
    year: '2026',
    images: [
      '/image/plateau-de-jeu-A4-V2-CMJN.png',
      '/image/eau.png',
      '/image/eglise.jpeg',
      '/image/ND.png',
    ],
    description:
      'Plateau de jeu de société alliant un univers aventurier, un "Où est Charlie ?" et un "Cluedo".',
  },
  {
    id: 'bona-dea',
    title: 'Bona Dea',
    category: 'École',
    year: '2026',
    images: [
      '/image/square-box-mockups-on-concrete-isometric.png',
      '/image/mockup1.png',
      '/image/mockup2.png',
      '/image/mockup3.png',
      '/image/mockup4.png',
    ],
    description:
      "Branding 360 pour une marque de coupe menstruelle, de la stratégie à l'identité.",
  },
  {
    id: 'ordre-de-malte',
    title: 'Ordre de Malte',
    category: 'Freelance',
    year: '2025',
    images: [
      '/image/Ordre_De_Malte_-_Solidarité_.jpg',
      '/image/secours.png',
    ],
    description:
      "Projet d'illustration freelance pour l'Ordre de Malte en 2025.",
  },
  {
    id: 'lesperance-bijoux',
    title: "L'Espérance Bijoux",
    category: 'Freelance',
    year: '2026',
    images: [
      '/image/esp.png',
      '/image/esp1.png',
      '/image/esp2.png',
    ],
    description: 'Identité visuelle pour une marque de bijoux.',
  },
  {
    id: 'infographie-rpa-ou-pas',
    title: 'RPA ou pas',
    category: 'École',
    year: '2026',
    images: [
      '/image/VI_phase_02_FINAL.png',
    ],
    description:
      'Infographie sur les personnes âgées en maison pour aînés au Québec.',
  },
  {
    id: 'brenor',
    title: 'Brenor',
    category: 'École',
    year: '2026',
    images: [
      '/image/bre1.PNG',
      '/image/bre2.PNG',
      '/image/bre3.PNG',
    ],
    description:
      "Création d'étiquettes de bouteilles de bière illustrant le conflit entre les Normands et les Bretons autour du Mont-Saint-Michel.",
  },
  {
    id: 'racine-by-prada',
    title: 'Racine by Prada',
    category: 'École',
    year: '2026',
    images: [
      '/image/parfum_prada.png',
      '/image/1.png',
      '/image/2.jpg.avif',
      '/image/3.png',
    ],
    description:
      "Projet phygital autour d'un parfum Prada, mêlant une expérience digitale immersive et un gifting innovant.",
  },
  {
    id: 'maison-auguste',
    title: 'Maison Auguste',
    category: 'Personnel',
    year: '2025',
    images: [
      '/image/DSC_4347.jpg',
      '/image/baguel1.jpg',
      '/image/baguel2.jpg',
      '/image/etiquettebaguel1.png',
      '/image/etiquettebaguel2.png',
      '/image/etiquettebageul3.png',
    ],
    description:
      'Marque de bagels fictive important la gastronomie des régions françaises dans les bagels à New York.',
  },
]

const artworksById = Object.fromEntries(artworks.map((art) => [art.id, art]))

const wallLayout = [
  { frameId: 'affiche', size: 'portrait', order: 1 },
  { frameId: 'jeu-de-societe', size: 'landscape', order: 2 },
  { frameId: 'bona-dea', size: 'portrait', order: 3 },
  { frameId: 'ordre-de-malte', size: 'portrait', order: 4 },
  { frameId: 'lesperance-bijoux', size: 'small', order: 5 },
  { frameId: 'infographie-rpa-ou-pas', size: 'portrait', order: 6 },
  { frameId: 'brenor', size: 'small', order: 7 },
  { frameId: 'racine-by-prada', size: 'portrait', order: 8 },
  { frameId: 'maison-auguste', size: 'portrait', order: 9 },
]

const HOLD_DURATION = 900
const CAROUSEL_LAUNCH_DURATION = 1700

function GoldFrame({ image, title, year, format = 'portrait' }) {
  return (
    <div className={`frame frame-${format}`}>
      <div className="frame-ornament frame-ornament-1"></div>
      <div className="frame-ornament frame-ornament-2"></div>
      <div className="frame-inner">
        <div className="frame-mat">
          <div className="frame-image-wrap">
            <img src={image} alt={title} className="frame-image" />
          </div>
        </div>
      </div>
      <div className="frame-caption">
        {title} · {year}
      </div>
    </div>
  )
}

function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1400)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <section className="intro-screen">
      <h1 className="intro-title">COLOMBE LABORIE</h1>
    </section>
  )
}

function CustomCursor({ cursor, isHolding, holdProgress, isLaunching }) {
  const cursorStyle = {
    transform: `translate(${cursor.x}px, ${cursor.y}px)`,
    opacity: cursor.visible ? 1 : 0,
    '--hold-progress': holdProgress,
  }

  return (
    <div className={`custom-cursor ${isHolding ? 'is-holding' : ''} ${isLaunching ? 'is-launching' : ''}`} style={cursorStyle}>
      <div className="custom-cursor-core"></div>
      <div className="custom-cursor-ring"></div>
      <svg className="custom-cursor-progress" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="custom-cursor-progress-track" cx="50" cy="50" r="42" />
        <circle className="custom-cursor-progress-fill" cx="50" cy="50" r="42" pathLength="100" />
      </svg>
    </div>
  )
}

function Carousel({ onOpenGallery, onCursorStateChange }) {
  const [rotation, setRotation] = useState(0)
  const [radius, setRadius] = useState(318)
  const [isHolding, setIsHolding] = useState(false)
  const [holdProgress, setHoldProgress] = useState(0)
  const [isLaunching, setIsLaunching] = useState(false)
  const [launchProgress, setLaunchProgress] = useState(0)

  const holdTimer = useRef(null)
  const holdAnimationRef = useRef(null)
  const launchAnimationRef = useRef(null)
  const rotationAnimationRef = useRef(null)

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth
      if (width < 640) setRadius(142)
      else if (width < 900) setRadius(205)
      else if (width < 1180) setRadius(258)
      else setRadius(318)
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  useEffect(() => {
    let previousTime = performance.now()

    const animateRotation = (now) => {
      const frameFactor = (now - previousTime) / 16.6667
      previousTime = now

      const boostedSpeed = 55 * launchProgress * launchProgress * launchProgress
      const speed = 0.05 + boostedSpeed

      setRotation((prev) => prev + speed * frameFactor)
      rotationAnimationRef.current = requestAnimationFrame(animateRotation)
    }

    rotationAnimationRef.current = requestAnimationFrame(animateRotation)

    return () => cancelAnimationFrame(rotationAnimationRef.current)
  }, [launchProgress])

  useEffect(() => {
    return () => {
      clearTimeout(holdTimer.current)
      cancelAnimationFrame(holdAnimationRef.current)
      cancelAnimationFrame(launchAnimationRef.current)
    }
  }, [])

  useEffect(() => {
    onCursorStateChange({ isHolding, holdProgress, isLaunching })
  }, [isHolding, holdProgress, isLaunching, onCursorStateChange])


  const stopHoldAnimation = () => {
    clearTimeout(holdTimer.current)
    cancelAnimationFrame(holdAnimationRef.current)
    setIsHolding(false)
    setHoldProgress(0)
  }

  const startHold = (e) => {
    if (isLaunching) return

    clearTimeout(holdTimer.current)
    cancelAnimationFrame(holdAnimationRef.current)
    setIsHolding(true)
    setHoldProgress(0)

    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / HOLD_DURATION, 1)
      setHoldProgress(progress)
      if (progress < 1) {
        holdAnimationRef.current = requestAnimationFrame(tick)
      }
    }

    holdAnimationRef.current = requestAnimationFrame(tick)

    holdTimer.current = setTimeout(() => {
      setIsHolding(false)
      setHoldProgress(1)
      startLaunch()
    }, HOLD_DURATION)
  }

  const stopHold = () => {
    if (isLaunching) return
    stopHoldAnimation()
  }

  const startLaunch = () => {
    if (isLaunching) return

    clearTimeout(holdTimer.current)
    cancelAnimationFrame(holdAnimationRef.current)
    setIsHolding(false)
    setHoldProgress(1)
    setIsLaunching(true)
    setLaunchProgress(0)

    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / CAROUSEL_LAUNCH_DURATION, 1)
      setLaunchProgress(progress)

      if (progress < 1) {
        launchAnimationRef.current = requestAnimationFrame(tick)
        return
      }

      onOpenGallery()
    }

    launchAnimationRef.current = requestAnimationFrame(tick)
  }

  const handleWheel = (e) => {
    if (isLaunching) return

    e.preventDefault()
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
    setRotation((prev) => prev + delta * 0.09)
  }

  const handleMouseLeave = () => {
    stopHold()
  }

  return (
    <section className="carousel-screen">
      <div className="carousel-header">COLOMBE LABORIE</div>

      <div
        className="carousel-stage"
        onWheel={handleWheel}
        onMouseDown={startHold}
        onMouseUp={stopHold}
        onMouseLeave={handleMouseLeave}
        onTouchStart={startHold}
        onTouchEnd={stopHold}
      >
        <div
          className="carousel-ring"
          style={{
            filter: `blur(${launchProgress * 11}px)`,
            opacity: 1 - launchProgress * 0.82,
            transform: `scale(${1 - launchProgress * 0.14})`,
            transition: 'filter 40ms linear, opacity 40ms linear, transform 40ms linear',
            pointerEvents: isLaunching ? 'none' : 'auto',
          }}
        >
          {artworks.map((art, index) => {
            const angle = rotation + (360 / artworks.length) * index
            const radians = (angle * Math.PI) / 180
            const x = Math.sin(radians) * radius
            const depth = Math.cos(radians)
            const scale = 0.68 + ((depth + 1) / 2) * 0.28
            const zIndex = Math.round((depth + 1) * 100)
            const rotateY = -Math.sin(radians) * 12
            const y = depth < 0 ? 6 : 0

            return (
              <div
                key={art.id}
                className="carousel-item"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity: 1,
                  zIndex,
                  cursor: isLaunching ? 'default' : 'pointer',
                  pointerEvents: isLaunching ? 'none' : 'auto',
                }}
              >
                <GoldFrame image={art.images[0]} title={art.title} year={art.year} format="portrait" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="carousel-instruction">Scroll pour manipuler · click and hold pour ouvrir la galerie</div>

    </section>
  )
}

function GalleryWall({ onSelectArtwork }) {
  const arrangedArtworks = useMemo(() => {
    return wallLayout.map((slot) => ({
      ...slot,
      art: artworksById[slot.frameId],
    }))
  }, [])

  return (
    <div className="gallery-shell">
      <div className="gallery-wall gallery-wall-visible is-visible">
        {arrangedArtworks.map(({ frameId, size, art, order }) => (
          <button
            key={frameId}
            type="button"
            className={[
              'gallery-slot',
              'gallery-slot-button',
              'interactive-hit',
              size === 'landscape' ? 'slot-landscape' : '',
              size === 'portrait' ? 'slot-portrait' : '',
              size === 'small' ? 'slot-small' : '',
              `wall-order-${order}`,
            ].join(' ')}
            onClick={() => onSelectArtwork(art)}
            aria-label={`Voir le détail de ${art.title}`}
          >
            <GoldFrame image={art.images[0]} title={art.title} year={art.year} format={size} />
          </button>
        ))}
      </div>
    </div>
  )
}

function GalleryDetail({ artwork, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('right')

  useEffect(() => {
    if (!artwork) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [artwork, onClose])

  useEffect(() => {
    setCurrentImageIndex(0)
    setSlideDirection('right')
  }, [artwork?.id])

  if (!artwork) return null

  const detailImages = artwork.images?.length ? artwork.images : [artwork.image]

  return (
    <div className="gallery-detail-overlay" onClick={onClose}>
      <div className="gallery-detail-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="gallery-detail-close" onClick={onClose} aria-label="Fermer le détail">
          ×
        </button>
        <div className="gallery-detail-visual">
          <div
            key={`${artwork.id}-${currentImageIndex}`}
            className={`gallery-detail-frame-stage gallery-detail-frame-stage-${slideDirection}`}
          >
            <GoldFrame image={detailImages[currentImageIndex]} title={artwork.title} year={artwork.year} format="portrait" />
          </div>
          {detailImages.length > 1 && (
            <div className="gallery-detail-image-nav">
              <button
                type="button"
                className="gallery-detail-image-arrow"
                onClick={() => {
                  setSlideDirection('left')
                  setCurrentImageIndex((prev) => (prev === 0 ? detailImages.length - 1 : prev - 1))
                }}
                aria-label="Image précédente"
              >
                ←
              </button>
              <button
                type="button"
                className="gallery-detail-image-arrow"
                onClick={() => {
                  setSlideDirection('right')
                  setCurrentImageIndex((prev) => (prev === detailImages.length - 1 ? 0 : prev + 1))
                }}
                aria-label="Image suivante"
              >
                →
              </button>
            </div>
          )}
        </div>
        <div className="gallery-detail-copy">
          <h2 className="gallery-detail-title">{artwork.title}</h2>
          <p className="gallery-detail-year">{artwork.category} · {artwork.year}</p>
          <p className="gallery-detail-description">{artwork.description}</p>
        </div>
      </div>
    </div>
  )
}

function Gallery({ onSelectArtwork, selectedArtwork, onCloseArtwork, onBack }) {
  return (
    <section className="gallery-screen gallery-screen-enter">
      <button type="button" className="gallery-back-button interactive-hit" onClick={onBack} aria-label="Retour au carrousel">
        <span className="gallery-back-arrow" aria-hidden="true">←</span>
      </button>
      <GalleryWall onSelectArtwork={onSelectArtwork} />
      <GalleryDetail artwork={selectedArtwork} onClose={onCloseArtwork} />
    </section>
  )
}

export default function App() {
  const [stage, setStage] = useState('intro')
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [cursor, setCursor] = useState({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0, visible: false })
  const [cursorState, setCursorState] = useState({ isHolding: false, holdProgress: 0, isLaunching: false })

  useEffect(() => {
    if (stage === 'intro') {
      setCursor((prev) => ({ ...prev, visible: false }))
      return undefined
    }

    const syncCursor = (event) => {
      const point = event.touches?.[0] || event
      if (!point) return
      setCursor({ x: point.clientX, y: point.clientY, visible: true })
    }

    const hideCursor = () => {
      setCursor((prev) => ({ ...prev, visible: false }))
    }

    const showCursor = () => {
      setCursor((prev) => ({ ...prev, visible: true }))
    }

    const previousHtmlCursor = document.documentElement.style.cursor
    const previousBodyCursor = document.body.style.cursor

    document.documentElement.style.cursor = 'none'
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', syncCursor)
    window.addEventListener('touchmove', syncCursor, { passive: true })
    window.addEventListener('mousedown', showCursor)
    window.addEventListener('mouseenter', showCursor)
    window.addEventListener('mouseleave', hideCursor)
    window.addEventListener('blur', hideCursor)

    return () => {
      document.documentElement.style.cursor = previousHtmlCursor
      document.body.style.cursor = previousBodyCursor
      window.removeEventListener('mousemove', syncCursor)
      window.removeEventListener('touchmove', syncCursor)
      window.removeEventListener('mousedown', showCursor)
      window.removeEventListener('mouseenter', showCursor)
      window.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
    }
  }, [stage])

  const openGallery = () => {
    setSelectedArtwork(null)
    setStage('gallery')
  }

  let screen = <Carousel onOpenGallery={openGallery} onCursorStateChange={setCursorState} />

  if (stage === 'intro') {
    screen = <Intro onFinish={() => setStage('carousel')} />
  }

  if (stage === 'gallery') {
    screen = (
      <Gallery
        onSelectArtwork={setSelectedArtwork}
        selectedArtwork={selectedArtwork}
        onCloseArtwork={() => setSelectedArtwork(null)}
        onBack={() => {
          setSelectedArtwork(null)
          setStage('carousel')
        }}
      />
    )
  }

  return (
    <>
      {screen}
      {stage !== 'intro' && (
        <CustomCursor
          cursor={cursor}
          isHolding={stage === 'carousel' ? cursorState.isHolding : false}
          holdProgress={stage === 'carousel' ? cursorState.holdProgress : 0}
          isLaunching={stage === 'carousel' ? cursorState.isLaunching : false}
        />
      )}
    </>
  )
}
