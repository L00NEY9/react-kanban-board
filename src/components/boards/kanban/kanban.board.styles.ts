import styled from "styled-components"
import {dimColor} from "../../../constants/ui";

export const KanbanBoardWrapper = styled.main`
  height: calc(100% - 150px);
  margin-top: 27px;
  margin-left: 20px;
`

export const KanbanBoardStatusesWrapper = styled.div`
  height: 100%;
  display: flex;
`

export const KanbanBoardCreateStatusButtonWrapper = styled.button`
  height: fit-content;
  background: none;
  display: flex;
  align-items: center;
  
  > * {
    color: ${dimColor};
  }
`
