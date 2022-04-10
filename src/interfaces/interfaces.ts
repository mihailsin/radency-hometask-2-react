export interface ITask {
  id: string | object;
  name: string;
  created?: string;
  category: string;
  content: string;
  archived: boolean;
  active: boolean;
  dates: string;
}
