import { Link } from 'react-router-dom'
import '../Css/Contacto.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import Map from './Mapas/Map'
import Mapa from './Mapas/Mapa'



export const Contacto = () => {

    return (
        <section className='section'>
            <div className="container_contacto">
            <div className='container_text'>
            <div className="texto">
                <h3 className='atencion'>Atención personalizada</h3>
                <p>Contamos con un equipo de profesionales altamente cualificados y responsables.</p>
                <p>Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</p>
            </div>
            </div>
            <form className="form">

                <label htmlFor="name"><strong>Nombre y apellidos</strong> (obligatorio)</label>
                <input id="name" type="text" required />

                <label htmlFor="email"><strong>Correo electrónico</strong> (obligatorio)</label>
                <input id="email" type="email" required />

                <label htmlFor="tel"><strong>Teléfono</strong> (obligatorio)</label>
                <input id="tel" type="tel" required />

                <label htmlFor="poblacion"><strong>Población</strong> (obligatorio)</label>
                <input id="poblacion" type="text" required />

                <label htmlFor="area"><strong>Dinos qué necesitas</strong></label>
                <textarea id="area" rows="8" cols="60"></textarea>
                <button className='boton_form'>Contáctanos</button>
            </form>
            </div>
            <div className="maps">
                <div className='pergolas_Murcia'>
                    <Map/>
                    <div className='enlace_maps'><Link to='https://maps.app.goo.gl/2puWix6g2NcwXofd8' className='link_mapa'>Calle Naranjo, Murcia, Murcia (30011)</Link></div>
                </div>
                <div className='pergolas_Alicante'>
                    <Mapa/>
                    <div className='enlace_maps'><Link to='https://maps.app.goo.gl/GjAMja38nWahdT4g8' className='link_mapa'>Camino Viejo de Valencia s/n, Benissa, Alicante (03720)</Link></div>
                </div>
            

            </div>
            <div className="privacidad">
                <p className='parrafo_contacto'>Pérgolas Canor, te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web <Link to='/' className='link__contacto'>http://www.pergolascanor.es</Link></p>
                <p className='parrafo_contacto'>En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).</p>
                <p className='parrafo_contacto'>El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.</p>
            </div>

            

        </section>
    )
}

