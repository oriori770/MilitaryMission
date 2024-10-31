import React, { useState, useEffect, useRef } from 'react'
import { IMission,IMissionOnDb, DtoMission } from '../types/types'
import MissionList from '../component/MissionList/MissionList'
// import Shearch from "../component/search/search"
import Button from '../component/buttons/Button'
import { getMissions,deleteMissions,postMissions,updateMissions } from '../DAL/ConectToRender'
import FormNewMission from '../component/formNewMission/FormNewMission'
const MainPage = () => {
    const [missionList, setMissionList] = useState<IMission[]>([])
    // const newMission = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const asyncfunc= async () => {
            const missions = await getMissions()
            setMissionList(missions)
        }
        asyncfunc()
    },[])


    const deleteMission = async(id: string): Promise<IMissionOnDb> => {
        const missions:IMissionOnDb = await deleteMissions(id)
        setMissionList(await getMissions())
        return missions
    }
    const addNewMission = async(mission: DtoMission): Promise<IMissionOnDb> => {
        const missions:IMissionOnDb = await postMissions(mission)
        setMissionList(await getMissions())
        return missions
    }
    const changeMissionStatus = async (id: string): Promise<{message: string}> => {
        const missions:{message: string} = await updateMissions(id)
        setMissionList(await getMissions())
        return missions
    }
    // console.log(missionList,"maun page");
  return (
    <>
        <FormNewMission addNewMission={addNewMission}  />
        <MissionList missionList={missionList} deleteMission={deleteMission} changeMissionStatus={changeMissionStatus} />
    </>
  )
}


export default MainPage