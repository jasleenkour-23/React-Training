import React from 'react'
import Condition from './Components/Condition'
import Forin from './Components/Forin'
import ForLoop from './Components/ForLoop'
import Forof from './Components/Forof'
import HideShow from './Components/HideShow'
import ForEach from './Components/ForEach'
import Map from './Components/Map'


export default function App() {
  return (
    <div>
      <Condition/>
      <HideShow/>
      <ForLoop/>
      <Forof/>
      <Forin/>
      <ForEach/>
      <Map/>
    </div>
  )
}
