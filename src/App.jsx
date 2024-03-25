import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  return (
    <>
    {
      puppies.map((puppy, index) => {
        return <p key={index}>{puppy.name}</p>
      })
    }
    </>
  )
}

export default App
