import { useCallback, useEffect, useMemo, useState } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

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
  options = { loop: true },
  autoplay = true,
  autoplayDelay = 7000,
}: CarouselProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mql.matches);
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  const effectiveAutoplay = autoplay && !prefersReducedMotion;
  const plugins = useMemo(
    () => (effectiveAutoplay ? [Autoplay({ delay: autoplayDelay })] : []),
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

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi]);

  return (
    <section
      className="carousel slide cid-r0uESEeqTF"
      id="slider1-5"
      aria-label="Presentación de contenido destacado"
      role="region"
      aria-roledescription="carousel"
      aria-live={effectiveAutoplay ? 'off' : 'polite'}
    >
      <div className="full-screen">
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
          <div className="embla__container carousel-inner" role="listbox" aria-live="polite">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={classNames('embla__slide carousel-item slider-fullscreen-image', {
                  active: index === 0,
                })}
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-label={`Slide ${index + 1} de ${slides.length}${index === selectedIndex ? ', actual' : ''}`}
              >
                <div className="container container-slide">
                  <div className="image_wrapper">
                    <div
                      className="mbr-overlay"
                      style={{ opacity: 0.5, backgroundColor: 'rgb(0, 0, 0)' }}
                    ></div>
                    <img src={slide.image} title={slide.title} alt={slide.title} />
                    <div className="carousel-caption justify-content-center">
                      <div className="col-10 align-center">
                        <h2 className="mbr-fonts-style display-1">{slide.title}</h2>
                        <p className="lead mbr-text mbr-fonts-style display-5">
                          {slide.description}
                        </p>
                        <div className="mbr-section-btn">
                          <Link
                            className="btn btn-white-outline display-4"
                            to={slide.linkTo}
                            aria-label={slide.linkText}
                          >
                            {slide.linkText}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-control carousel-control-prev"
          type="button"
          onClick={scrollPrev}
          aria-label="Slide anterior"
        >
          <span aria-hidden="true" className="mbri-left mbr-iconfont"></span>
          <span className="sr-only">Anterior</span>
        </button>
        <button
          className="carousel-control carousel-control-next"
          type="button"
          onClick={scrollNext}
          aria-label="Slide siguiente"
        >
          <span aria-hidden="true" className="mbri-right mbr-iconfont"></span>
          <span className="sr-only">Siguiente</span>
        </button>
      </div>
    </section>
  );
}
