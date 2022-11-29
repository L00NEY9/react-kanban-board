import { keyframes } from "styled-components";

export const AppearanceFromLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const JumpedAnimation = keyframes`
  0% {
    transform: scale(.5);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`
