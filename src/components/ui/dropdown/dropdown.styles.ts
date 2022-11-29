import styled from "styled-components"
import {animationTransition, background, backgroundDarker, hoverTransition} from "../../../constants/ui";
import {JumpedAnimation} from "../../../styles/animations";

export const DropdownWrapper = styled.div`
  position: relative;
  
  > button {
    background-color: transparent;
    transition: background-color ${hoverTransition}s;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    
    > svg {
      width: 20px;
      height: 20px;
      margin-left: 15px;
      transition: transform ${animationTransition}s;
    }

    &:hover {
      background: ${backgroundDarker};
    }
  }
`


export const DropdownMenuWrapper = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 6px;
  margin: 8px 0 0;
  width: 100%;
  list-style: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  background-color: ${background};
  border-radius: 8px;
  animation: ${JumpedAnimation} .5s;

  > li {
    height: 40px;
    text-align: left;
    padding-left: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    margin: 0;
    cursor: pointer;
  }
`
