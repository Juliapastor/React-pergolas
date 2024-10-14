import { Link } from "react-router-dom"
import '../Css/Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="descripcion">
            <h3><Link to='/' className="titulo_footer">Pérgolas Canor</Link></h3>
            <p>Nos especializamos en la creación de estructuras a medida, como <strong>cubiertas, pérgolas, cerramientos</strong> y <strong>revestimientos</strong>, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.</p>
            <button className="presupuesto"><Link to='/contacto' className="sin_sub">Solicita tu presupuesto</Link></button>
            <button className="whatsapp"><Link to='https://web.whatsapp.com/send?phone=+34614306304' className="sin_sub">Consulta por WhatsApp</Link></button>
        </div>
        <div className="contacto">
            <p className="parraf">Contacto</p>
            <nav className="nav_footer">
            <Link to='https://maps.app.goo.gl/GjAMja38nWahdT4g8' className="link_footer">Camino Viejo de Valencia</Link>
            <Link to='https://maps.app.goo.gl/GjAMja38nWahdT4g8' className="link_footer">Benissa, Alicante 03720</Link>
            <Link to='tel:+34965730087' className="link_footer">965 730 087</Link>
            </nav>

            <nav className="nav_footer">
            <Link to='https://maps.app.goo.gl/2puWix6g2NcwXofd8' className="link_footer">Calle Naranjo</Link>
            <Link to='https://maps.app.goo.gl/2puWix6g2NcwXofd8' className="link_footer">Murcia, Murcia 30011</Link>
            <Link to='tel:+34968842335' className="link_footer">968 842 335</Link>
            </nav>

            <nav className="nav_footer">
            <Link to='mailto:info@pergolascanor.es' className="link_footer">info@pergolascanor.es</Link>
            <Link to='tel:+34614306304' className="link_footer">614 30 63 04</Link>
            <Link to='tel:+34620453905' className="link_footer">620 45 39 05</Link>
            </nav>
        </div>
        <div>
            <p className="parraf">Menú</p>
        <nav className='nav_footer'>
        <Link to='/' className="link_footer">Inicio</Link>
        <Link to='/galeria' className="link_footer">Galería</Link>
        <Link to='/nosotros' className="link_footer">Nosotros</Link>
        <Link to='/contacto' className="link_footer">Contacto</Link>
        </nav>
        </div>

    </div>
  )
}
