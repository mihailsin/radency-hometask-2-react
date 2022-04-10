import React from "react";
import { useAppSelector } from "../../redux/hooks";

import {
  Table,
  TableHeader,
  HeaderElement,
  TableRow,
  TableBody,
  DataElement,
} from "../TasksTable/TasksTable.styled";

const CategoriesTable: React.FC = () => {
  const taskList = useAppSelector((state) =>
    state.tasks.filter((element) => element.category === "Task")
  );
  const ideaList = useAppSelector((state) =>
    state.tasks.filter((element) => element.category === "Idea")
  );
  const thoughtsList = useAppSelector((state) =>
    state.tasks.filter((element) => element.category === "Random Thought")
  );
  const activeTasks: any[] = taskList.filter((todo) => todo.active);
  const archivedTasks: any[] = taskList.filter((todo) => todo.archived);
  const activeIdeas: any[] = ideaList.filter((todo) => todo.active);
  const archivedIdeas: any[] = ideaList.filter((todo) => todo.archived);
  const activeThoughts: any[] = thoughtsList.filter((todo) => todo.active);
  const archivedThoughts: any[] = thoughtsList.filter((todo) => todo.archived);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeaderElement>Note Category</HeaderElement>
          <HeaderElement>Active</HeaderElement>
          <HeaderElement>Archived</HeaderElement>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <DataElement>Task</DataElement>
          <DataElement>{activeTasks.length}</DataElement>
          <DataElement>{archivedTasks.length}</DataElement>
        </TableRow>
        <TableRow>
          <DataElement>Idea</DataElement>
          <DataElement>{activeIdeas.length}</DataElement>
          <DataElement>{archivedIdeas.length}</DataElement>
        </TableRow>
        <TableRow>
          <DataElement>Random Thought</DataElement>
          <DataElement>{activeThoughts.length}</DataElement>
          <DataElement>{archivedThoughts.length}</DataElement>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;
