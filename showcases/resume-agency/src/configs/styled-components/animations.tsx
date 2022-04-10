import { keyframes } from "styled-components";

export const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const slideRight = (w: string = "100%") => keyframes`
  from {
    opacity: 0;
    width: 0;
  }

  to {
    opacity: 1;
    width:  ${w};
  }
`;
