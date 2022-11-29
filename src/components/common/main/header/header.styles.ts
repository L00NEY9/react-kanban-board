import styled from "styled-components"
import {secondaryColor} from "../../../../constants/ui";

export const HeaderWrapper = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LeftSideHeaderWrapper = styled.div`
  display: flex;
  > * {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`

export const AddNewButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: ${secondaryColor};
  color: white;
  border-radius: 50px;
  
  > svg {
    width: 20px;
    height: 20px;
    margin-right: 7px;
  }
`

export const RightSideHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  
`

export const SearchTextFieldWrapper = styled.div`
  width: 180px;
`

export const NotificationsButtonWrapper = styled.button`
  background: transparent;
  position: relative;
  margin-right: 8px;
  margin-left: 23px;
  &:after {
    content: "99+";
    font-size: 10px;
    position: absolute;
    border-radius: 4px;
    top: -4px;
    right: -3px;
    padding: 3px;
    background: #F21247;
    color: white;
  }
`
