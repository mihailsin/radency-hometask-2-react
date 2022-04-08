import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, toggleArchived } from "../../redux/slices";
import { Button } from "../TableButton/TableButton.styled";
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

const TasksTable = ({ toggleModal, toggleArchivedModal }) => {
  const items = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
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
              <Button type="button">
                <BiArchiveIn size={20} />
              </Button>
              <Button type="button">
                <MdDelete size={20} />
              </Button>
            </HeaderElement>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(
            ({ id, name, created, category, content, dates, archived }) =>
              !archived && (
                <TableRow key={id}>
                  <DataElement>{name}</DataElement>
                  <DataElement>{created}</DataElement>
                  <DataElement>{category}</DataElement>
                  <DataElement>{content}</DataElement>
                  <DataElement>{dates}</DataElement>
                  <DataElement>
                    <Button type="button">
                      <AiOutlineEdit size={20} />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => dispatch(toggleArchived(id))}
                    >
                      <BiArchiveIn size={20} />
                    </Button>
                    <Button type="button" onClick={() => dispatch(remove(id))}>
                      <MdDelete size={20} />
                    </Button>
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
        <button type="button" onClick={() => toggleArchivedModal()}>
          View Archived
        </button>
      </div>
    </>
  );
};

export default TasksTable;
