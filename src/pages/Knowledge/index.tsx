import { Layout } from '../../design/templates/Layout';

export default function Knowledge() {
  return (
    <Layout>
      <main>
        <section className="header12 cid-r0v9sk6ker mbr-parallax-background" id="header12-z">
          <div className="mbr-overlay" style={{ opacity: 0.9, backgroundColor: 'rgb(51, 51, 51)' }}></div>
          <div className="container">
            <div className="media-container">
              <div className="col-md-12 align-center">
                <h1 className="mbr-section-title pb-3 mbr-white mbr-bold mbr-fonts-style display-2">CONOCIMIENTOS</h1>
                <p className="mbr-text pb-3 mbr-white mbr-fonts-style display-5">Entre mis principales áreas de conocimiento se encuentran:</p>
                <div className="icons-media-container mbr-white">
                  <div className="card col-12 col-md-6 col-lg-3"><div className="icon-block"><span className="mbr-iconfont mbri-code"></span></div><h5 className="mbr-fonts-style display-5">Programación</h5></div>
                  <div className="card col-12 col-md-6 col-lg-3"><div className="icon-block"><span className="mbr-iconfont mbri-setting"></span></div><h5 className="mbr-fonts-style display-5">Electrónica</h5></div>
                  <div className="card col-12 col-md-6 col-lg-3"><div className="icon-block"><span className="mbr-iconfont mbri-website-theme"></span></div><h5 className="mbr-fonts-style display-5">Diseño</h5></div>
                  <div className="card col-12 col-md-6 col-lg-3"><div className="icon-block"><span className="mbr-iconfont mbri-lock"></span></div><h5 className="mbr-fonts-style display-5">Redes y Seguridad</h5></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mbr-section article content11 cid-r0vaJJNjIR" id="content11-12">
          <div className="container">
            <div className="media-container-row">
              <div className="mbr-text counter-container col-12 col-md-8 mbr-fonts-style display-7">
                <ol>
                  <li><strong>Programación/Sistemas</strong> - Diversos lenguajes de programación (Java, Javascript, C, C++, C#, HTML, CSS, SQL, C orientado a objetos, Swift, Python, Arduino, Aspx, .Net, PHP), Frameworks (React, Angular, Node), APIs(REST, SOAP, WCF), Uso de aplicaciones de desarrollo (Dreamweaver, Sublime text, Atom, Visual Studio, Netbeans, Eclipse, Xcode, Github, Arduino, Atmel Studio, entre otras), Plataformas de administración y desarrollo web/CMS (Joomla, wordpress, prestashop), experiencia en E-commerce con las mismas. Uso avanzado de Linux y distribuciones (Debian, Kali, Fedora, CentOS, Ubuntu), microsoft y mac (OSX). Uso avanzado de maquinas virtuales / virtualización, entorno de servidor, diseño y administración de bases de datos SQL (Sql developer/oracle, SQL Server Management Studio/microsoft, SQLite, Dia, Dezign), Office Suite, desarrollo y trabajo colaborativo con plataformas Cloud, uso de apis de google, optimización de sitios web, aplicación de frameworks como boostrap.</li>
                  <li><strong>Electrónica</strong> - Amplia experiencia en desarrollo con Arduino, electrónica analógica, electrónica digital, manejo de microcontroladores, proteus, fritzing, atmel studio, diseño y armado de circuitos.</li>
                  <li><strong>Diseño</strong> - Manejo de herramientas de Adobe Suite (Illustrator, Photoshop), Diseño (físicos y para redes sociales) de imagen, logos, banners, publicidad, fotografía, edición de foto y video.</li>
                  <li><strong>Redes y Seguridad</strong> - Experiencia con manipulación y configuración de equipos Cisco, certificación Cisco CCNA 1 y 2, diseño y configuración de redes LAN y WAN (Físico y Virtual), cableado, implementación de métodos de seguridad propia de la red y en equipos personales, nivel alto en ethical hacking y auditoria de redes, ciberseguridad, criptografía, levantamiento de servidores.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}