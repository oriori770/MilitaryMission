export interface IMission {
  id?: string;
  mission: string;
  priority: Priority;
  status: Status;
}
export enum Priority {
  Low = "Low",
  Medium= "Medium",
  High = "High",
}

export enum Status {
  Pending = "Pending",
  InProgress = "In Progress",
  Completed = "Completed",
}
export interface IMissionOnDb extends IMission {
    _id: string,
    description: string,
    apikey: string,
    _v: number
}
