import Navbar from './components/navbar/navbar'
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
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      <main className="flex-1 overflow-y-auto">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  )
}

export default LayoutApp
