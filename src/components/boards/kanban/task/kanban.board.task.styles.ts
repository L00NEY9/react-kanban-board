import styled from "styled-components"
import {backgroundDarker, dimColor} from "../../../../constants/ui";
import {KanbanBoardTaskWrapperProps} from "./kanban.board.task.interface";

export const KanbanBoardTaskWrapper = styled.div<KanbanBoardTaskWrapperProps>`
  width: 270px;
  padding: 15px;
  text-align: left;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  background-color: ${props => props.statusIsDisabled ? backgroundDarker : props.backgroundColor};
  
  > h4 {
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: ${props => props.statusIsDisabled ? dimColor : "#222222"};
    text-decoration: ${props => props.statusIsDisabled && "line-through"};
  }
  
  > span {
    line-height: 15px;
    font-size: 13px;
    color: ${props => props.statusIsDisabled ? dimColor : props.timeColor};
  }
`
