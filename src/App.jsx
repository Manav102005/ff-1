import { useState } from 'react'
import './App.css'
import Ques1 from './Ques1'
import Ques2 from './Ques2'
import Ques3 from './Ques3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Ques1 /> */}
      <Ques2 />
      {/* <Ques3 /> */}
    </>
  )
}

export default App
