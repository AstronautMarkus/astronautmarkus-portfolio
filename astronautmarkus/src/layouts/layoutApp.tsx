import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import BackgroundImg from '../assets/img/background.jpg'

interface LayoutAppProps {
  children: React.ReactNode
}

function LayoutApp({ children }: LayoutAppProps) {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 overflow-y-auto pt-20">
        <div className="p-4 min-h-full flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default LayoutApp
