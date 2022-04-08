import React from "react";
import { useDispatch } from "react-redux";
import { remove, toggleArchived } from "../../redux/slices";
import { Button } from "../TableButton/TableButton.styled";
import { AiOutlineEdit } from "react-icons/ai";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiFillFolderAdd } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableHeader,
  HeaderElement,
  TableRow,
  TableBody,
  DataElement,
} from "./TasksTable.styled";

const TasksTable = ({ toggleModal, toggleEditModal, tasks, tableFor }) => {
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
              {tableFor === "active" && (
                <Button type="button">
                  <BiArchiveIn size={20} />
                </Button>
              )}
              {tableFor === "archived" && (
                <Button type="button">
                  <BiArchiveOut size={20} />
                </Button>
              )}
              <Button type="button">
                <MdDelete size={20} />
              </Button>
            </HeaderElement>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map(({ id, name, created, category, content, dates }) => (
            <TableRow key={id}>
              <DataElement>{name}</DataElement>
              <DataElement>{created}</DataElement>
              <DataElement>{category}</DataElement>
              <DataElement>{content}</DataElement>
              <DataElement>{dates}</DataElement>
              <DataElement>
                {tableFor === "active" && (
                  <>
                    <Button type="button" onClick={() => toggleEditModal(id)}>
                      <AiOutlineEdit size={20} />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => dispatch(toggleArchived(id))}
                    >
                      <BiArchiveIn size={20} />
                    </Button>
                  </>
                )}
                {tableFor === "archived" && (
                  <Button
                    type="button"
                    onClick={() => dispatch(toggleArchived(id))}
                  >
                    <BiArchiveOut size={20} />
                  </Button>
                )}
                <Button type="button" onClick={() => dispatch(remove(id))}>
                  <MdDelete size={20} />
                </Button>
              </DataElement>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        {tableFor === "active" && (
          <Button type="button" onClick={() => toggleModal()}>
            <AiFillFolderAdd size={50} />
          </Button>
        )}
      </div>
    </>
  );
};

export default TasksTable;
