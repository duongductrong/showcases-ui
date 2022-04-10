import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import useStyle from "../../core/hooks/useStyle";
import { FaArrowsAltH, FaPlus } from "react-icons/fa";

export interface CursorProps {}

export type CursorHandlerType = "open" | "drag" | "";

const CursorBase = styled.div`
  z-index: 9999;
  width: var(--cursor-width, 20px);
  height: var(--cursor-height, 20px);
  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.2);

  position: absolute;
  top: calc(var(--cursor-y) - calc(var(--cursor-width) / 2));
  left: calc(var(--cursor-x) - calc(var(--cursor-height) / 2));

  transition: all 50ms linear;

  appearance: none;
  pointer-events: none;
  mix-blend-mode: difference;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Cursor: FC<CursorProps> = ({ ...props }) => {
  const { setProperty } = useStyle();
  const [cursor, setCursor] = useState<CursorHandlerType>("");

  const switchToHandlerCursor = (cursor: CursorHandlerType) => {
    switch (cursor) {
      case "open":
        setProperty("--cursor-width", "40px");
        setProperty("--cursor-height", "40px");
        break;
      case "drag":
        setProperty("--cursor-width", "40px");
        setProperty("--cursor-height", "40px");
        break;
      default:
        setProperty("--cursor-width", "20px");
        setProperty("--cursor-height", "20px");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const targetElement: HTMLElement = e.target as any;
      const cursorData: CursorHandlerType = targetElement.getAttribute(
        "data-cursor"
      ) as any;

      const { clientX, clientY } = e;

      setProperty("--cursor-x", `${clientX}px`);
      setProperty("--cursor-y", `${clientY}px`);

      switchToHandlerCursor(cursorData);

      // computed change state
      if (cursorData !== cursor) {
        setCursor(cursorData);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CursorBase {...props}>
      {cursor === "open" ? (
        <FaPlus size="12" color="white" />
      ) : cursor === "drag" ? (
        <FaArrowsAltH size="12" color="white" />
      ) : null}
    </CursorBase>
  );
};

export default Cursor;
