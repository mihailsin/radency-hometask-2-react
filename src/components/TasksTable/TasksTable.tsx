import React from "react";
import { ITasksTableProps } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../redux/hooks";
import {
  remove,
  toggleArchived,
  archiveAll,
  unArchiveAll,
  removeArchived,
  removeActive,
} from "../../redux/slices";
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
  ButtonsWrapper,
} from "./TasksTable.styled";

const TasksTable: React.FC<ITasksTableProps> = ({
  toggleModal,
  toggleEditModal,
  tasks,
  tableFor,
}) => {
  const dispatch = useAppDispatch();
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
                <Button type="button" onClick={() => dispatch(archiveAll())}>
                  <BiArchiveIn size={20} />
                </Button>
              )}
              {tableFor === "archived" && (
                <Button type="button" onClick={() => dispatch(unArchiveAll())}>
                  <BiArchiveOut size={20} />
                </Button>
              )}
              {tableFor === "active" && (
                <Button type="button" onClick={() => dispatch(removeActive())}>
                  <MdDelete size={20} />
                </Button>
              )}
              {tableFor === "archived" && (
                <Button
                  type="button"
                  onClick={() => dispatch(removeArchived())}
                >
                  <MdDelete size={20} />
                </Button>
              )}
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
                <ButtonsWrapper>
                  {tableFor === "active" && (
                    <>
                      <Button
                        type="button"
                        onClick={() =>
                          toggleEditModal ? toggleEditModal(id) : null
                        }
                      >
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
                </ButtonsWrapper>
              </DataElement>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        {tableFor === "active" && (
          <Button
            type="button"
            onClick={() => (toggleModal ? toggleModal() : null)}
          >
            <AiFillFolderAdd size={50} />
          </Button>
        )}
      </div>
    </>
  );
};

export default TasksTable;
