import React,{useRef} from 'react'
import Button from '../buttons/Button'
import { IMission,IMissionOnDb } from '../../types/types'
import {ChooseColor} from "../../services/service"
interface Props {
    mission: IMission,
    deleteMission: (id: string) => Promise<IMissionOnDb>,
    changeMissionStatus: (id: string) => Promise<{ message: string }>;
  }
const Mission = ({mission,deleteMission, changeMissionStatus}: Props) => {
    return (
    <div style={{backgroundColor: ChooseColor[mission.status]}}>
           <p>Name:{mission.name}</p>
           <p>Status{mission.status}</p>  
           <p>Priority:({mission.priority})</p>
           <p>Description:{mission.description}</p>
           <Button text="Delete" onClick={()=>deleteMission(mission._id  )}/>   
            {mission.status!="Completed" && <Button text="Complete" onClick={()=>changeMissionStatus(mission._id)}/>}
    </div>
  )
}

export default Mission