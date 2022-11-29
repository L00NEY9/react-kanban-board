import styled from "styled-components"
import {dimColor, primaryColorLighter} from "../../../constants/ui";

export const TextFieldWrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 10px;

  > input {
    border: none;
    outline: none;
    width: 100%;
  }

  > svg {
    width: 20px;
    height: 20px;
  }
  
  &.light {
    > svg {
      color: ${dimColor};
    }
  }
  
  &.dark {
    background: ${primaryColorLighter};

    > input {
      background: ${primaryColorLighter};
      color: white;
      &::placeholder {
        color: ${dimColor};
      }
    }

    > svg {
      color: ${dimColor};
    }
  }
`
