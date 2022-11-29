import styled from "styled-components";
import {animationTransition, dimColor} from "../../../../constants/ui";
import {AppearanceFromLeftAnimation} from "../../../../styles/animations";

export const SideBarNavigateSectionWrapper = styled.section`
  height: 34px;
  margin-top: 13px;
  padding: 6px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    transition: transform ${animationTransition}s;
  }
  
  > span {
    margin-left: 8px;
    font-size: 14px;
    color: white;
  }
  
  &.child {
    margin-top: 0;
    animation: ${AppearanceFromLeftAnimation} ${animationTransition}s;
    
    > span {
      color: ${dimColor};
    }
  }
`
