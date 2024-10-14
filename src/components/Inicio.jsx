import { Link } from "react-router-dom";
import '../Css/Inicio.css';


import imagen_26 from '../assets/img/imagen_26.png'
import imagen_1 from '../assets/img/imagen_1.png'
import imagen_33 from '../assets/img/imagen_33.png'
import imagen_11 from '../assets/img/imagen_11.png'
import imagen_7 from '../assets/img/imagen_7.png'
import imagen_6 from '../assets/img/imagen_6.png'
import imagen_27 from '../assets/img/imagen_27.png'
import imagen_30 from '../assets/img/imagen_30.png'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"




export const Inicio = () => {

    const images =[
        
            {original: imagen_26},
            {original: imagen_7},
            {original: imagen_6},
            {original: imagen_27},
            {original: imagen_30},

    ]
    
  return (
    <div className="inicio">
    <div className="presentacion">
       
            <h1 className="titulo__inicio">Pérgolas Canor</h1>
            <h2>Fabricación propia de pérgolas de madera</h2>
            <h2 className="titulo_dos">en Murcia y Benissa</h2>
            <h3 className="cursiva">La mejor pérgola al mejor precio.</h3>
           <h3 className="cursiva"> Dinos tu presupuesto, ¡te lo mejoramos!</h3>
        <button className="boton__inicio"><Link to='/contacto' className="link__inicio">Solicita presupuesto gratis</Link></button>
        
    </div>
    <div className="carrusel">

        <div className="gallery_images">
        <ImageGallery
            items={images}
            showFullscreenButton={false}
            autoPlay={true}/>
        </div>
        

    <button className="boton_ir_galeria"><Link to='/galeria' className="link__inicio">Visita nuestra Galería</Link></button>

    </div>
    <div className="servicios">
        <div>
            <h2 className="nuestros_servicios">Nuestros servicios</h2>
            
        </div>
        <div className="servicio_con_foto">
        <div className="texto_para_foto">
            <h3>Diseño y construcción de pérgolas</h3>
            <p>Creamos pérgolas personalizadas para adaptarse a cualquier espacio y estilo, utilizando los mejores materiales y técnicas de construcción.</p>
           </div>
            <img src={imagen_26} className="imagen_inicio"/>
        </div>
        <div className="servicio_con_foto">
            <img src={imagen_1} className="imagen_inicio"/>
            <div className="texto_para_foto">
            <h3>Revestimientos</h3>
            <p className="p_inicio">Instalamos revestimientos de madera de alta calidad que dan un toque de elegancia y calidez a tu hogar.</p>   
            </div>
        </div>
        <div className="servicio_con_foto">
            <div className="texto_para_foto">
            <h3>Cerramientos y tejados</h3>
            <p className="p_inicio">Creamos cerramientos de madera y pladur a medida que aportan privacidad y protección a tu terraza o jardín.</p>
            <p className="p_inicio">Aislamos y construimos tejados con acabados en teja y tégola</p>
            </div>
            <img src={imagen_33} className="imagen_inicio"/>
        </div>
        <div className="servicio_con_foto">
            
            <img src={imagen_11} className="imagen_inicio"/>
            <div className="texto_para_foto">
            <h3>Reparación y mantenimiento</h3>
            <p className="p_inicio">Un mantenimiento adecuado de tu pérgola, le prolonga la vida útil.</p>
            <p className="p_inicio">Pintura, cambio de madera estropeada, reparación de cubierta, tanto de tela asfáltica, tégola o teja.</p>
            </div>
        </div>
        <div className="servicio_con_foto">
            <div className="texto_para_foto">
            <h3>Montaje de estructuras</h3>
            <p className="p_inicio">¿Tienes tu propia pérgola? Nosotros te la montamos.</p>
            <p className="p_inicio">Casetas, porches, toldos y marquesinas de madera.</p>
            <p className="p_inicio">Todos los modelos y estilos.</p>
            </div>
            <img src={imagen_7} className="imagen_inicio"/>
        </div>

    </div>
    </div>
  )
}
