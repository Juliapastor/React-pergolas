import { Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Galeria } from '../components/Galeria'
import { Nosotros } from '../components/Nosotros'
import { Contacto } from '../components/Contacto'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/galeria' element={<Galeria/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
  )
}
