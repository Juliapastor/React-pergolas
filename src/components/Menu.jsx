import { Link } from "react-router-dom"
import '../Css/Menu.css'
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"



export const Menu = () => {
  const element = (
    <div>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      
    </div>
  )

  return (
    <div className="header">
    <div className="izquierda">
    <img src={logo}/>
    <Link to="/" className="link_header"><div className="titulo">Pérgolas Canor</div></Link>
    </div>

    <nav className='menu'>
        <Link to='/'>Inicio</Link>
        <Link to='/galeria'>Galería</Link>
        <Link to='/nosotros'>Nosotros</Link>
        <Link to='/contacto'>Contacto</Link>
    </nav>
    <div className="derecha">
    <div className="redes_sociales">
    <Link to='' className="link_whatsapp_icon"><FontAwesomeIcon icon={faWhatsapp} className="whatsapp_icon"/></Link>
    <FontAwesomeIcon icon={faFacebook} className="facebook"/>
    <FontAwesomeIcon icon={faInstagram} className="instagram" />
    
    </div>
    <div className="boton_header">
      <button className="boton_presup">Solicita tu presupuesto</button>
      <button className="boton_llamanos">Llámanos 614306304</button>
    </div>
   

    
    </div>
    </div>
  )
}
