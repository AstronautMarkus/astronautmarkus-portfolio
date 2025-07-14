function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">¡Hola mundo!</h1>
        <p className="text-xl text-gray-600">Programado para trabajar y no sentir.</p>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
          <p className="text-gray-700">
            Desarrollador apasionado por la tecnología y la programación.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
          <ul className="text-gray-700">
            <li>• React & TypeScript</li>
            <li>• Node.js</li>
            <li>• Desarrollo web</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
