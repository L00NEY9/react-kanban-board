import React, {useRef} from 'react';
import {KanbanBoardStatusWrapper} from "./kanban.board.status.styles";
import {BoardStatus, DraggableTaskItem} from "../../../../models/board.model";
import KanbanBoardTask from "../task/kanban.board.task";
import {useDrop} from "react-dnd";
import {draggableTypes} from "../../../../constants/draggableTypes";
import {useAppDispatch} from "../../../../hooks/dispatch.hook";
import {replaceTask} from "../../../../store/slices/board.slice";

const KanbanBoardStatus: React.FC<BoardStatus> = ({ title, id, disabled, tasks}) => {
  const tasksContainerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  const [, dropRef] = useDrop({
    accept: draggableTypes.TASK,
    drop: (item: DraggableTaskItem, monitor) => {
      if(monitor.didDrop()) return
      dispatch(replaceTask({
        taskID: item.taskID,
        oldStatus: item.status,
        newStatus: id
      }))
    }
  })


  return (
    <KanbanBoardStatusWrapper ref={dropRef}>
      <h4>
        {
          title
        }
        <span>
          {
            tasks.length
          }
        </span>
      </h4>
      <div ref={tasksContainerRef}>
        {
          tasks.map((task, index) => <KanbanBoardTask index={index} status={id} disabled={disabled} key={task.id} {...task}/>)
        }
      </div>
    </KanbanBoardStatusWrapper>
  );
};

export default KanbanBoardStatus;
