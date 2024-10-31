import { useState } from 'react'
import {getMissions,deleteMissions,postMissions,updateMissions} from "./DAL/ConectToRender"
import {IMission,Priority,Status} from "./types/types"

import './App.css'
import MainPage from './pages/MainPage'

function App() {
  
  return (
    <>
        <div>
          <MainPage />
        </div>
    </>
  )
}
export default App

// const f:IMission = {
//     name: "string", 
//     status: Status.Pending,
//     priority: Priority.Low,
//     description: "string"
    
// }
