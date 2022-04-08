import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, toggleArchived } from "../../redux/slices";
import { BiArchiveOut } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Wrapper from "../Wrapper";
import {
  Table,
  TableHeader,
  HeaderElement,
  TableRow,
  TableBody,
  DataElement,
} from "../TasksTable/TasksTable.styled";
import { Backdrop } from "../AddTaskForm/AddTaskForm.styled";
import { CgCloseO } from "react-icons/cg";
import { Button } from "../TableButton/TableButton.styled";
const ArchivedTable = ({ toggleArchivedModal }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tasks);
  return (
    <Backdrop>
      <Wrapper>
        <Button
          style={{ alignSelf: "flex-end", margin: "0" }}
          onClick={() => toggleArchivedModal()}
        >
          <CgCloseO size={20} />
        </Button>
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
                  <BiArchiveOut size={20} />
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
                archived && (
                  <TableRow key={id}>
                    <DataElement>{name}</DataElement>
                    <DataElement>{created}</DataElement>
                    <DataElement>{category}</DataElement>
                    <DataElement>{content}</DataElement>
                    <DataElement>{dates}</DataElement>
                    <DataElement>
                      <Button
                        type="button"
                        onClick={() => dispatch(toggleArchived(id))}
                      >
                        <BiArchiveOut size={20} />
                      </Button>
                      <Button
                        type="button"
                        onClick={() => dispatch(remove(id))}
                      >
                        <MdDelete size={20} />
                      </Button>
                    </DataElement>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </Wrapper>
    </Backdrop>
  );
};

export default ArchivedTable;
