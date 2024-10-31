import React from 'react'
import Button from '../buttons/Button'
import { IToDo } from '../../types/types'
interface Props {
    toDo: IToDo
    deleteToDo: (id: string) => void,
    changeMissionStatus: (id: string) => void
}
const Mission = ({Mission,deleteMission, changeMissionStatus}: Props) => {
    return (
    <div>
           <p onClick={() => changeMissionStatus(Mission.id)}>{Mission.isDO ? '✅' : '❌'}</p>
           <p>{Mission.mission}</p>
           <Button text="Delete" onClick={()=>deleteToDo(toDo.id)}/>   
    </div>
  )
}

export default Mission