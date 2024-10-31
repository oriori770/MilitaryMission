export interface IMission {
  _id: string;
  name: string;
  priority: Priority;
  status: Status;
  description: string;
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
