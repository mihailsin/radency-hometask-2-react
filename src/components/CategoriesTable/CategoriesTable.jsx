import React from "react";
import { useSelector } from "react-redux";

import {
  Table,
  TableHeader,
  HeaderElement,
  TableRow,
  TableBody,
  DataElement,
} from "../TasksTable/TasksTable.styled";

const CategoriesTable = () => {
  const taskList = useSelector((state) =>
    state.tasks.filter((element) => element.category === "Task")
  );
  const ideaList = useSelector((state) =>
    state.tasks.filter((element) => element.category === "Idea")
  );
  const thoughtsList = useSelector((state) =>
    state.tasks.filter((element) => element.category === "Random Thought")
  );
  const activeTasks = taskList.filter((todo) => todo.active);
  const archivedTasks = taskList.filter((todo) => todo.archived);
  const activeIdeas = ideaList.filter((todo) => todo.active);
  const archivedIdeas = ideaList.filter((todo) => todo.archived);
  const activeThoughts = thoughtsList.filter((todo) => todo.active);
  const archivedThoughts = thoughtsList.filter((todo) => todo.archived);
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
