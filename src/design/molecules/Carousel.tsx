import { useCallback, useEffect, useMemo, useState } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Carousel.scss';

type CarouselSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  linkTo: string;
  linkText: string;
};

interface CarouselProps {
  slides: CarouselSlide[];
  options?: EmblaOptionsType;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function Carousel({
  slides,
  options = { loop: true, duration: 20 },
  autoplay = true,
  autoplayDelay = 7000,
}: CarouselProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mql.matches);
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  const effectiveAutoplay = autoplay && !prefersReducedMotion && !isHovered;
  const plugins = useMemo(
    () => (effectiveAutoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : []),
    [effectiveAutoplay, autoplayDelay]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi]);

  return (
    <section
      className="modern-carousel"
      aria-label="Presentación de contenido destacado"
      role="region"
      aria-roledescription="carousel"
      aria-live={effectiveAutoplay ? 'off' : 'polite'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-container">
        <div
          className="embla"
          ref={emblaRef}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') scrollPrev();
            if (e.key === 'ArrowRight') scrollNext();
          }}
          aria-label="Carrusel, use las flechas izquierda y derecha para navegar"
        >
          <div className="embla__container" role="listbox" aria-live="polite">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={classNames('embla__slide', {
                  active: index === selectedIndex,
                })}
                aria-label={`Slide ${index + 1} de ${slides.length}${index === selectedIndex ? ', actual' : ''}`}
              >
                <div className="slide-background">
                  <img src={slide.image} alt={slide.title} className="background-image" />
                  <div className="overlay"></div>
                </div>

                <div className="slide-content">
                  <div className="content-wrapper">
                    <div className="text-content">
                      <h2 className="slide-title">{slide.title}</h2>
                      <p className="slide-description">{slide.description}</p>
                      <div className="slide-actions">
                        <Link
                          className="slide-button"
                          to={slide.linkTo}
                          aria-label={slide.linkText}
                        >
                          <span>{slide.linkText}</span>
                          <svg
                            className="button-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="carousel-controls">
          <button
            className="control-button prev-button"
            type="button"
            onClick={scrollPrev}
            aria-label="Slide anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="control-button next-button"
            type="button"
            onClick={scrollNext}
            aria-label="Slide siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={classNames('indicator', {
                active: index === selectedIndex,
              })}
              onClick={() => scrollTo(index)}
              aria-label={`Ir al slide ${index + 1}`}
            >
              <div className="indicator-progress"></div>
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="slide-counter">
          <span className="current-slide">{selectedIndex + 1}</span>
          <span className="separator">/</span>
          <span className="total-slides">{slides.length}</span>
        </div>
      </div>
    </section>
  );
}
