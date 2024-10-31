import React from "react";
import { IMission, IMissionOnDb } from "../../types/types";
import Mission from "../Mission/Mission";
interface Props {
  missionList: IMission[];
  deleteMission: (id: string) => Promise<IMissionOnDb>;
  changeMissionStatus: (id: string) => Promise<{ message: string }>;
}
const MissionList = ({
  missionList,
  deleteMission,
  changeMissionStatus,
}: Props) => {
  return (
    <>
      {missionList.map((mission: IMission) => (
        <Mission
          mission={mission}
          key={mission._id}
          deleteMission={deleteMission}
          changeMissionStatus={changeMissionStatus}
        />
      ))}
    </>
  );
};

export default MissionList;
