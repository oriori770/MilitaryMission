import React, { useState, useEffect, useRef } from 'react'
import { IMission,IMissionOnDb } from '../types/types'
import ToDoList from '../component/MissionList/MissionList'
// import Shearch from "../component/search/search"
import Button from '../component/buttons/Button'
import { getMissions,deleteMissions,postMissions,updateMissions } from '../DAL/ConectToRender'
const MainPage = () => {
    const [missionList, setMissionList] = useState<IMission[]>([])
    const newMission = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const asyncfunc= async () => {
            const missions = await getMissions()
            setMissionList(missions)
        }
        asyncfunc()
    },[])

    const deleteMission = async(id: string) => {
        const missions:IMissionOnDb = await deleteMissions(id)
        setMissionList(await getMissions())
        return missions
    }
    const addNewMission = async(mission: IMission) => {
        const missions:IMissionOnDb = await postMissions(mission)
        setMissionList(await getMissions())
        return missions
    }
    const changeMissionStatus = async(id: string) => {
        const missions:{message: string} = await updateMissions(id)
        setMissionList(await getMissions())
        return missions
    }
    console.log(missionList,"maun page");//
  return (
    <>
        {/* <Shearch refToValue={newMission} />  <Button text="Add" onClick={() => addNewToDo(createNewToDo(newMission.current!.value))} /> */}
        <ToDoList toDoListUs={missionList} deleteToDo={deleteMission} changeMissionStatus={changeMissionStatus} />
    </>
  )
}


export default MainPage