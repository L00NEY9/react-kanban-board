import styled from "styled-components"
import {backgroundDarker, dimColor} from "../../../../constants/ui";

export const KanbanBoardStatusWrapper = styled.div`
  width: 270px;
  height: 100%;
  text-align: center;
  margin-right: 20px;

  > h4 {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 55px 10px;

    > span {
      margin-left: 10px;
      line-height: 16px;
      padding: 2px 9px;
      border-radius: 100px;
      font-size: 14px;
      background-color: ${backgroundDarker};
      color: ${dimColor};
    }
  }
`
