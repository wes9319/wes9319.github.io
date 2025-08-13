import { useCallback, useEffect } from 'react';
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
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section className="carousel slide cid-r0uESEeqTF" id="slider1-5" aria-label="Presentación">
      <div className="full-screen">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container carousel-inner" role="listbox">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={classNames('embla__slide carousel-item slider-fullscreen-image', {
                  active: index === 0,
                })}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="container container-slide">
                  <div className="image_wrapper">
                    <div className="mbr-overlay" style={{ opacity: 0.5, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                    <img src={slide.image} title={slide.title} alt={slide.title} />
                    <div className="carousel-caption justify-content-center">
                      <div className="col-10 align-center">
                        <h2 className="mbr-fonts-style display-1">{slide.title}</h2>
                        <p className="lead mbr-text mbr-fonts-style display-5">{slide.description}</p>
                        <div className="mbr-section-btn">
                          <Link className="btn btn-white-outline display-4" to={slide.linkTo} aria-label={slide.linkText}>
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


