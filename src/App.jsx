import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Venta from './components/layouts/venta/Venta'
import Inventario from './components/layouts/inventario/Inventario'
import Guardar from './components/layouts/inventario/Guardar'
import Inicio from './components/layouts/Inicio'
import CrearVenta from './components/layouts/venta/CrearVenta'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio/>
  },

  {
    path: '/venta',
    element: <Venta/>
  },

  {
    path: "/crearventa",
    element: <CrearVenta />
  },

  {
    path: '/inventario',
    element: <Inventario/>
  },

  {
    path: '/crearproducto',
    element: <Guardar />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
