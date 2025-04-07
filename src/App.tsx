import './App.scss'
import HexHueCircle from './components/ColorCircle/ColorCircle'
import ColorOptions from './components/ColorOptions/ColorOptions'
import GuessArea from './components/GuessArea/GuessArea'

function App() {
  return (
    <>
      <div className="left">

        <GuessArea />
        <HexHueCircle targetColor="#f87171" size={250} />

        
      </div>

      <ColorOptions />


      {/* <div className="right">
      <canvas id="hexhue-circle" width="200" height="200"></canvas>
      <HexHueCircle targetColor="#f87171" size={350} />
      </div> */}
    </>
  )
}

export default App
