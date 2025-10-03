import { Counter } from '@components/counter/Counter'
import './App.css'
import { ReactLogo } from '@components/react-logo/ReactLogo'
import { ViteLogo } from '@components/vite-logo/ViteLogo'

function App() {
  return (
    <>
      <div>
        <ViteLogo />
        <ReactLogo />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
