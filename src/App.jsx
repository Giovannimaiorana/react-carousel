import { useState } from 'react'
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PostList from './components/PostList';
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheHeader />
      <main>
        <PostList />
      </main>
      <TheFooter />
    </>
  )
}

export default App
