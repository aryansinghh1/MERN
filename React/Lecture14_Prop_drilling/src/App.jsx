import { useState } from 'react'
import Parent from './components/Parent'

export default function App() {
  const [user, setUser] = useState("aryan")

  return (
   <div>
    <h1>Prop drilling</h1>
    <Parent user = {user}/>
   </div>
  )
}
