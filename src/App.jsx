import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  console.log(PokemonCard)
  return (
    <div>
      <PokemonCard />
    </div>
  )
}

export default App
