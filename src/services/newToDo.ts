import { IToDo } from '../types/types'
import { v4 as uuidv4 } from 'uuid';
export function createNewToDo(mission: string): IToDo {
    const newToDo: IToDo = {
        id: uuidv4(),
        mission,
        isDO: false
    }
    return newToDo
}