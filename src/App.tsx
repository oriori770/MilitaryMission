import { useState } from 'react'
import {getMissions} from "./DAL/ConectToRender"

import './App.css'
import MainPage from './pages/MainPage'

function App() {
  
  return (
    <>
        <div>
          <MainPage />
        </div>
        <button onClick={async () =>console.log(await getMissions())}>get</button>
    </>
  )
}

export default App
