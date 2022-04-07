import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableButton from "../TableButton";
import { AiOutlineEdit } from "react-icons/ai";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableHeader,
  HeaderElement,
  TableRow,
  TableBody,
  DataElement,
} from "./TasksTable.styled";

const TasksTable = ({ toggleModal }) => {
  const items = useSelector((state) => state.tasks);
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderElement>Name</HeaderElement>
            <HeaderElement>Created</HeaderElement>
            <HeaderElement>Category</HeaderElement>
            <HeaderElement>Content</HeaderElement>
            <HeaderElement>Dates</HeaderElement>
            <HeaderElement>
              <TableButton type="button">
                <BiArchiveIn size={20} />
              </TableButton>
              <TableButton type="button">
                <MdDelete size={20} />
              </TableButton>
            </HeaderElement>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(
            ({ id, name, created, category, content, dates, archived }) => (
              <TableRow key={id}>
                <DataElement>{name}</DataElement>
                <DataElement>{created}</DataElement>
                <DataElement>{category}</DataElement>
                <DataElement>{content}</DataElement>
                <DataElement>{dates}</DataElement>
                <DataElement>
                  <TableButton type="button">
                    <AiOutlineEdit size={20} />
                  </TableButton>
                  <TableButton type="button">
                    <BiArchiveIn size={20} />
                  </TableButton>
                  <TableButton type="button">
                    <MdDelete size={20} />
                  </TableButton>
                </DataElement>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <div>
        <button type="button" onClick={() => toggleModal()}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default TasksTable;
