import axios from 'axios';
import { IMission,IMissionOnDb,DtoMission } from '../types/types';
const apikey = import.meta.env.VITE_RENDER_ACCESS_KEY
const baseUrl = 'https://reactexambackend.onrender.com/missions';

export const getMissions = async (): Promise<IMission[]> => {
  try {
    const response = await axios.get(baseUrl +"/" + apikey);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch missions');
  }
};
export const postMissions = async (mission: DtoMission): Promise<IMissionOnDb> => {
  try {
    const response = await axios.post(baseUrl +"/" + apikey, mission);
    return response.data;
  } catch (error) {
    throw new Error('Failed to post missions');
  }
};
export const deleteMissions = async (id: string): Promise<IMissionOnDb> => {
  try {
    const response = await axios.delete(baseUrl +"/" + apikey + "/" + id);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete mission');
  }
};
export const updateMissions = async (id: string): Promise<{message: string}> => {
  try {
    const response = await axios.post(baseUrl +"/" + apikey + "/" +"progress/" + id);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update missions');
  }
};
