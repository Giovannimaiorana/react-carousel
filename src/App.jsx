import { useState } from 'react'
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import TheCarousel from './components/TheCarousel';
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheHeader />
      <main>
        <TheCarousel />
      </main>
      <TheFooter />
    </>
  )
}

export default App
