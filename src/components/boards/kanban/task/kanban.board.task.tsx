import React, {useRef} from 'react';
import {KanbanBoardTaskWrapper} from "./kanban.board.task.styles";
import {useDrag, useDrop} from "react-dnd";
import {draggableTypes} from "../../../../constants/draggableTypes";
import {KanbanBoardTaskProps} from "./kanban.board.task.interface";
import {DraggableTaskItem} from "../../../../models/board.model";
import {useAppDispatch} from "../../../../hooks/dispatch.hook";
import {replaceTask} from "../../../../store/slices/board.slice";

const KanbanBoardTask: React.FC<KanbanBoardTaskProps> = ({
  label,
  color,
  time,
  timeColor,
  id,
  disabled,
  status,
  index
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  const [{ isDragging }, drag] = useDrag({
    type: draggableTypes.TASK,
    item: () => ({
      taskID: id,
      status,
    }),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, drop] = useDrop<DraggableTaskItem>({
    accept: draggableTypes.TASK,
    drop: (item) => {
      dispatch(replaceTask({
        newStatus: status,
        oldStatus: item.status,
        taskID: item.taskID,
        position: index
      }))
    }
  })

  drag(drop(ref))
  return (
    <KanbanBoardTaskWrapper
      ref={ref}
      itemID={id.toString()}
      backgroundColor={color}
      timeColor={timeColor}
      statusIsDisabled={disabled || false}
      style={{
        opacity: `${isDragging ? .5 : 1}`
      }}
    >
      <h4>
        {
          label
        }
      </h4>
      <span>
        {
          time
        }
      </span>
    </KanbanBoardTaskWrapper>
  );
};

export default KanbanBoardTask;
