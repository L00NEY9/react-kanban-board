import styled from "styled-components";
import {primaryColor, primaryColorLighter, sideBarWidth} from "../../../constants/ui";

export const SideBarWrapper = styled.aside`
  height: 100%;
  width: ${sideBarWidth}px;
  min-width: ${sideBarWidth}px;
  background: ${primaryColor};
  padding: 26px 16px;

  > img {
    margin-bottom: 26px;
  }
`

export const SearchTextFieldWrapper = styled.div`
  margin-bottom: 20px;
`

export const WorkspaceSectionWrapper = styled.section`
  width: 220px;
  height: 34px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${primaryColorLighter};
  transform: translateX(-16px);

  > span {
    color: white;
    margin-left: 8px;
    font-size: 14px;
  }
`
