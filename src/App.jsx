import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Customhtml from './Customhtml'
// import { Scroll, ScrollControls } from '@react-three/drei'


function App() {

  return (
    <>
      <Canvas>
     
        <Customhtml/>
        <Experience/>
       
      </Canvas>
    </>
  )
}

export default App
