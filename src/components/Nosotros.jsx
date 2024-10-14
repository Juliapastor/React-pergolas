import '../Css/Nosotros.css'


import imagen_22 from '../assets/img/imagen_22.png'
import imagen_11 from '../assets/img/imagen_11.png'
import imagen_100 from '../assets/img/imagen_100.png'
import imagen_12 from '../assets/img/imagen_12.png'

export const Nosotros = () => {
  return (
    <div className="nosotros">
        <h2 className='sobre_nosotros_title'>Sobre nosotros</h2>
        <div className='nosotros_apartado'>
            <p className='sobre_nosotros_p'>Pérgolas Canor es la parte especializada en estructuras y pérgolas de madera de Carpintería Canor, con más de 40 años de experiencia en el sector de la madera.</p>
            <img src={imagen_22} className='sobre_nosotros_img'/>
        </div>
        <div className='nosotros_apartado'>
            <img src={imagen_11} className='sobre_nosotros_img'/>
            <p className='sobre_nosotros_p'>Tenemos un equipo de alta cualificación y un backoffice para hacer realidad aquello que imagines y logran una total satisfacción del producto y su instalación final.</p>
            
        </div>
        <div className='nosotros_apartado'> 
            <p className='sobre_nosotros_p'>Nos especializamos en la creación de estructuras a medida, como cubiertas, pérgolas, cerramientos y revestimientos, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.</p>
            <img src={imagen_100} className='sobre_nosotros_img'/>
        </div>
        <div className='nosotros_apartado'>
            <img src={imagen_12} className='sobre_nosotros_img'/>
            <p className='sobre_nosotros_p'>Contamos con un equipo de profesionales altamente cualificados y responsables. Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</p>
           
        </div>
    </div>
  )
}
