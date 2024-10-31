import React, { useRef } from "react";
import {
  IMission,
  IMissionOnDb,
  Priority,
  Status,
  DtoMission,
} from "../../types/types";
import Button from "../buttons/Button";
interface Props {
  addNewMission: (mission: DtoMission) => Promise<IMissionOnDb>;
}
const FormNewMission = ({ addNewMission }: Props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const statusInput = useRef<HTMLSelectElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const priorityInput = useRef<HTMLSelectElement>(null);
  return (
    <>
      <input ref={nameInput} type="text" placeholder="name" />
      <select ref={statusInput} name="Status" defaultValue={Status.Pending}>
        <option value={Status.Pending}>Pending</option>
        <option value={Status.InProgress}>InProgress </option>
        <option value={Status.Completed}>Completed</option>
      </select>
      <select ref={priorityInput} name="Priority" defaultValue={Priority.Low}>
        <option value={Priority.Low}>Low</option>
        <option value={Priority.Medium}>Medium </option>
        <option value={Priority.High}>High</option>
      </select>
      <input ref={descriptionInput} type="text" placeholder="mission description" />

      <Button
        text="Add"
        onClick={() =>
          addNewMission(
 {
                name: nameInput.current!.value,
                status: statusInput.current!.value as Status,
                priority: priorityInput.current!.value as Priority,
                description: descriptionInput.current!.value,
              }
          )
        }
      />
    </>
  );
};

export default FormNewMission;
