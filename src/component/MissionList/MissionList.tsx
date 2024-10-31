import React from 'react'
import { IMission } from '../../types/types'
import Mission from '../Mission/Mission'
interface Props {
    toDoListUs: IMission[],
    deleteToDo: (id: string) => void,
    changeMissionStatus: (id: string) => void
}
const ToDoList = ({toDoListUs, deleteToDo, changeMissionStatus}: Props) => {
  return (
    <>
        {toDoListUs.map((toDo) => <Mission toDo={toDo} key={toDo.id} deleteToDo={deleteToDo} changeMissionStatus={changeMissionStatus}/>)}
    </>
      )
}

export default ToDoList