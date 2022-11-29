import React from 'react';
import {
  KanbanBoardCreateStatusButtonWrapper,
  KanbanBoardStatusesWrapper,
  KanbanBoardWrapper
} from "./kanban.board.styles";
import KanbanBoardStatus from "./status/kanban.board.status";
import {useAppSelector} from "../../../hooks/selector.hook";
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import {IconPlus} from "@tabler/icons";

const KanbanBoard = () => {
  const statuses = useAppSelector(state => state.board.statuses)

  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanBoardWrapper>
        <KanbanBoardStatusesWrapper>
          {
            statuses.map(status => <KanbanBoardStatus key={status.id} {...status}/>)
          }
          <KanbanBoardCreateStatusButtonWrapper>
            <IconPlus/>
            <span>Create status</span>
          </KanbanBoardCreateStatusButtonWrapper>
        </KanbanBoardStatusesWrapper>
      </KanbanBoardWrapper>
    </DndProvider>
  );
};

export default KanbanBoard;
