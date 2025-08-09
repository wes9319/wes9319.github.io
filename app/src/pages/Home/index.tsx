import { Link } from 'react-router-dom';
import { Layout } from '../../design/templates/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="engine" style={{ display: 'none' }}></section>

        <section className="header3 cid-r0uKM9TUP3" id="header3-6">
          <div className="container">
            <div className="media-container-row">
              <div className="mbr-figure" style={{ width: '160%' }}>
                <img src="/assets/images/perfil-wes9319-1270x952.jpg" alt="perfil" />
              </div>
              <div className="media-content">
                <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1">Elvis W. Vásquez</h1>
                <h3 className="mbr-section-subtitle align-left mbr-white mbr-light pb-3 mbr-fonts-style display-2">Desarrollador Web</h3>
                <div className="mbr-section-btn">
                  <a className="btn btn-md btn-white display-4" href="/assets/files/Curriculum_final_EWVV_ESP_updated.pdf" target="_blank">Descargar CV en PDF</a>
                  <a className="btn btn-md btn-white-outline display-4" href="/assets/files/CV_EWVV_ENG_updated.pdf" target="_blank">Download PDF CV</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="header1 cid-r0uZvEEHNv mbr-parallax-background" id="header1-c">
          <div className="mbr-overlay" style={{ opacity: 0.4, backgroundColor: 'rgb(0, 0, 0)' }}></div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="mbr-white col-md-10">
                <h1 className="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-2"><span style={{ fontWeight: 'normal' }}>Sobre mi</span></h1>
                <p className="mbr-text align-center pb-3 mbr-fonts-style display-7">Mi nombre es Elvis Wesley Vásquez, tengo 26 años, soy de Quito-Ecuador. Hablo inglés y español, soy emprendedor, músico y me apasiona la ciencia, la tecnología en general. En especial la apuntada a las computadoras y el espacio. Tengo años de experiencia en entornos tecnológicos multidisciplinarios. En años recientes enfocado al desarrollo web y seguridad informática.</p>
                <div className="mbr-section-btn align-center"><Link className="btn btn-md btn-white display-4" to="/contact">Contacto</Link></div>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel slide cid-r0uESEeqTF" id="slider1-5">
          <div className="full-screen">
            <div className="mbr-slider slide carousel" data-interval="7000">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item slider-fullscreen-image" style={{ backgroundImage: 'url(/assets/images/mbr-1-1920x1280.jpg)' }}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay" style={{ opacity: 0.5, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                      <img src="/assets/images/mbr-1-1920x1280.jpg" title="Conocimientos" />
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-center">
                          <h2 className="mbr-fonts-style display-1">Conocimientos</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Cisco - Front-end &amp; Back-end Web Developer - DB Managment (SQL) - Ecommerce - Community Management - Linux - Adobe Suite - etc ...</p>
                          <div className="mbr-section-btn"><Link className="btn btn-white-outline display-4" to="/knowledge">VER MÁS ...</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slider-fullscreen-image active" style={{ backgroundImage: 'url(/assets/images/mbr-1920x1280.jpg)' }}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay" style={{ opacity: 0.5 }}></div>
                      <img src="/assets/images/mbr-1920x1280.jpg" title="Formación" />
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-center">
                          <h2 className="mbr-fonts-style display-1">Formación</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Universidad San Francisco de Quito - Universidad de las Américas - Cursos y Certificaciones varios.</p>
                          <div className="mbr-section-btn"><Link className="btn btn-white-outline display-4" to="/education">VER MÁS ...</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slider-fullscreen-image" style={{ backgroundImage: 'url(/assets/images/mbr-1920x1281.jpg)' }}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay"></div>
                      <img src="/assets/images/mbr-1920x1281.jpg" title="Trabajos y Proyectos" />
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-center">
                          <h2 className="mbr-fonts-style display-1">Trabajos y Proyectos</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Desarrollador Web - Diseñador Web - Community Manager - Plataforma Ecommerce - Apps Educativas - Domótica - Robótica ... etc</p>
                          <div className="mbr-section-btn"><Link className="btn btn-white-outline display-4" to="/work-projects">VER MÁS ...</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}