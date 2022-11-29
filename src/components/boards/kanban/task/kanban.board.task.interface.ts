import {BoardTask} from "../../../../models/board.model";

export interface KanbanBoardTaskProps extends BoardTask {
  disabled?: boolean;
  status: string;
  index: number;
}

export interface KanbanBoardTaskWrapperProps {
  statusIsDisabled: boolean;
  backgroundColor: string;
  timeColor: string;
}
