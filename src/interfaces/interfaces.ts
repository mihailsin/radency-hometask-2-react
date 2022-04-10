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

export interface ITaskFormProps {
  toggleModal(id: string | void): void;
  title: string;
  submitHandler(e: React.SyntheticEvent): void;
  inputHandler(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
  category: string;
}

export interface ITasksTableProps {
  toggleEditModal?(id: string): void;
  toggleModal?(): void;
  tasks: any[];
  tableFor: string;
}
