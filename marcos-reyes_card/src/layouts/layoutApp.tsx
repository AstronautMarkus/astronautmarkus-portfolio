import { Outlet } from 'react-router-dom'

function LayoutApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav>
          <h1 className="text-2xl font-bold">Marcos Reyes</h1>
        </nav>
      </header>
      
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Marcos Reyes. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default LayoutApp
