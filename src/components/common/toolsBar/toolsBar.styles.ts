import styled from "styled-components"
import {secondaryColor, toolsBarWidth} from "../../../constants/ui";

export const ToolsBarWrapper = styled.aside`
  padding: 24px 16px;
  width: ${toolsBarWidth}px;
  min-width: ${toolsBarWidth}px;

  > h2 {
    font-size: 18px;
    margin: 0 0 30px;
    font-weight: 400;
  }
`

export const ToolWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  span {
    margin-left: 15px;
  }
  
  &.selected {
    position: relative;
    
    svg {
      color: ${secondaryColor};
    }
    
    span {
      color: ${secondaryColor};
    }
    
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 4px;
      height: 100%;
      background: ${secondaryColor};
      transform: translateX(-16px);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`
