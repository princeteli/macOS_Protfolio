import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Dock, Navbar, Welcome } from '#components'
import { Resume, Safari, Terminal } from '#windows'

const App = () => {
  gsap.registerPlugin(Draggable)
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>


      <Terminal/>
      <Safari/>
      <Resume/>
    </main>
  )
}

export default App
