import { Link } from 'react-router-dom';
import { Layout } from '../../design/templates/Layout';
import { Head } from '../../shared/components/Head';
import { HeroSection } from '../../design/organisms/HeroSection';
import { Carousel } from '../../design/molecules/Carousel';

export default function Home() {
  return (
    <Layout>
      <Head />
      <section className="engine" style={{ display: 'none' }}></section>
      <HeroSection id="header3-6" className="cid-r0uKM9TUP3">
        <div className="media-container-row">
          <div className="mbr-figure" style={{ width: '160%' }}>
            <img src="/assets/images/perfil-wes9319-1270x952.jpg" alt="Elvis Wesley Vásquez" />
          </div>
          <div className="media-content">
            <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1">Elvis W. Vásquez</h1>
            <h3 className="mbr-section-subtitle align-left mbr-white mbr-light pb-3 mbr-fonts-style display-2">Desarrollador Web</h3>
            <div className="mbr-section-btn">
              <a className="btn btn-md btn-white display-4" href="/assets/files/Curriculum_final_EWVV_ESP_updated.pdf" target="_blank" rel="noopener noreferrer">Descargar CV en PDF</a>
              <a className="btn btn-md btn-white-outline display-4" href="/assets/files/CV_EWVV_ENG_updated.pdf" target="_blank" rel="noopener noreferrer">Download PDF CV</a>
            </div>
          </div>
        </div>
      </HeroSection>
      <HeroSection id="header1-c" className="cid-r0uZvEEHNv mbr-parallax-background" overlay={{ opacity: 0.4, backgroundColor: 'rgb(0, 0, 0)' }}>
        <div className="row justify-content-md-center">
          <div className="mbr-white col-md-10">
            <h1 className="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-2"><span style={{ fontWeight: 'normal' }}>Sobre mi</span></h1>
            <p className="mbr-text align-center pb-3 mbr-fonts-style display-7">Mi nombre es Elvis Wesley Vásquez, tengo 26 años, soy de Quito-Ecuador. Hablo inglés y español, soy emprendedor, músico y me apasiona la ciencia, la tecnología en general. En especial la apuntada a las computadoras y el espacio. Tengo años de experiencia en entornos tecnológicos multidisciplinarios. En años recientes enfocado al desarrollo web y seguridad informática.</p>
            <div className="mbr-section-btn align-center"><Link className="btn btn-md btn-white display-4" to="/contact">Contacto</Link></div>
          </div>
        </div>
      </HeroSection>
      <Carousel
        slides={[
          {
            id: 'knowledge',
            title: 'Conocimientos',
            description:
              'Cisco - Front-end & Back-end Web Developer - DB Managment (SQL) - Ecommerce - Community Management - Linux - Adobe Suite - etc ...',
            image: '/assets/images/mbr-1-1920x1280.jpg',
            linkTo: '/knowledge',
            linkText: 'VER MÁS ...',
          },
          {
            id: 'education',
            title: 'Formación',
            description:
              'Universidad San Francisco de Quito - Universidad de las Américas - Cursos y Certificaciones varios.',
            image: '/assets/images/mbr-1920x1280.jpg',
            linkTo: '/education',
            linkText: 'VER MÁS ...',
          },
          {
            id: 'work-projects',
            title: 'Trabajos y Proyectos',
            description:
              'Desarrollador Web - Diseñador Web - Community Manager - Plataforma Ecommerce - Apps Educativas - Domótica - Robótica ... etc',
            image: '/assets/images/mbr-1920x1281.jpg',
            linkTo: '/work-projects',
            linkText: 'VER MÁS ...',
          },
        ]}
      />
    </Layout>
  );
}