import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <section className="menu cid-qTkzRZLJNu" id="menu1-0">
      <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <Link to="/">
                <img src="/assets/images/logo-ewvv-web-red-200-200x100.png" alt="logo" style={{ height: '3.8rem' }} />
              </Link>
            </span>
          </div>
        </div>
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
            <li className="nav-item">
              <a className="nav-link link text-white display-4" href="/#header3-6">
                <span className="mbri-user mbr-iconfont mbr-iconfont-btn"></span>
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/knowledge" className="nav-link link text-white display-4">
                <span className="mbri-devices mbr-iconfont mbr-iconfont-btn"></span>
                Conocimientos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/education" className="nav-link link text-white display-4">
                <span className="mbri-edit mbr-iconfont mbr-iconfont-btn"></span>
                Formación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/work-projects" className="nav-link link text-white display-4">
                <span className="mbri-idea mbr-iconfont mbr-iconfont-btn"></span>
                Trabajos y Proyectos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link link text-white display-4">
                <span className="mbri-globe mbr-iconfont mbr-iconfont-btn"></span>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}