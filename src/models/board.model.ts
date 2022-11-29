export interface BoardTask {
  id: string;
  label: string;
  time: string;
  color: string;
  timeColor: string;
}

export interface BoardStatus {
  id: string;
  title: string;
  disabled?: boolean;
  tasks: BoardTask[];
}

export interface BoardModel {
  statuses: BoardStatus[];
}

export interface DraggableTaskItem {
  taskID: string;
  status: string;
}
