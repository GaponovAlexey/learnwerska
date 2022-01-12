import { Benefits } from './components/Benefits'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Places } from './components/Places'
import { TopPlaces } from './components/TopPlaces'
import { Tour } from './components/Tour'
import { Video } from './components/Video'

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Benefits />
      <Places />
      <Tour />
      <TopPlaces />
      <Video />
      <Footer />
    </div>
  )
}
export default App
