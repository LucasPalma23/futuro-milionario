import { useState } from 'react'
import Sites from '../../components/Sites'
import AOS from 'aos'
import 'aos/dist/aos.css';

import imgLogo from '../../assets/logo.svg'
import imgPolygon from '../../assets/polygon-img.svg'
import imgSite1 from '../../assets/site1.svg'
import imgLogoResponsive from '../../assets/logo-responsive.svg'

import './styles.scss'

export default function Home() {
  AOS.init();

  const [active, setActive] = useState('nav-list')
  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav-list-active')
      : setActive('nav-list')
  }

  return (
    <>
      <header>
        <img src={imgPolygon} alt="polígono" className="polygon-header" />
        <div className="img-responsive">
          <img
            src={imgLogoResponsive}
            alt="Logo da empra"
            className="logo-img-responsive"
          />
        </div>
        <img src={imgLogo} alt="Logo da empresa" className="logo-img" />
        <nav>
          <div onClick={navToggle} className="mobile-menu">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </div>
          <ul className={active}>
            <div>
              <li>Início</li>
            </div>
            <div>
              <li>Catálogo</li>
            </div>
            <div>
              <li>Sobre</li>
            </div>
            <div>
              <li>Contato</li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="section-header">
        <div className="title-header">
          <h1>O que eu faço para passar mais confiança ao meu cliente?</h1>
        </div>
        <div className="button-header">
          <button>
            VER MAIS {'>'}
            {'>'}
            {'>'}
          </button>
        </div>
      </div>
      <main>
        <div className="product-site" >
          <div className="teste" data-aos="fade-right" data-aos-duration="2000">
            <Sites
              image={<img src={imgSite1} />}
              name="Laminexx - Site para vidraçarias e empresas
              de vidros, alumínios e box"
            />
          </div>
          <div className="teste" data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000">
            <Sites
              image={<img src={imgSite1} />}
              name="Laminexx - Site para vidraçarias e empresas
              de vidros, alumínios e box"
            />
          </div>
          <div className="teste" data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
            <Sites
              image={<img src={imgSite1} />}
              name="Laminexx - Site para vidraçarias e empresas
              de vidros, alumínios e box"
            />
          </div>
        </div>
      </main>
    </>
  )
}
