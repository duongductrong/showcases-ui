import React, { FC, RefObject, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export interface BackdoorProps {
  targetAt?: RefObject<HTMLElement>;

  active: boolean;
}

export interface BackdoorStyledProps {
  width: string;
  height: string;
  x: string;
  y: string;
  active?: boolean;
}

export interface SlideFullscreenAnimationParams
  extends Omit<BackdoorStyledProps, "active"> {}

export const slideFullscreen = ({
  width = "0px",
  height = "0px",
  x = "0px",
  y = "0px",
}: SlideFullscreenAnimationParams) => keyframes`
  0% {
    width: ${width};
    height: ${height};
    top: ${y};
    left: ${x};
  }

  40% {
    width: ${width};
    height: ${height};
    top: ${y};
    left: ${x};
  }

  100% {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;

const BackdoorWrapper = styled.div<BackdoorStyledProps>`
  position: absolute;

  background-color: ${(p) => (p.active ? p.theme.yellow : "transparent")};

  animation: ${(p) =>
      slideFullscreen({ width: p.width, height: p.height, x: p.x, y: p.y })}
    1200ms ease-out forwards;
  animation-play-state: ${(p) => (p.active ? "running" : "paused")};
`;

const Backdoor: FC<BackdoorProps> = ({
  targetAt,
  active,
  children,
  ...props
}) => {
  const [startPoint, setStartPoint] = useState({
    w: "0px",
    h: "0px",
    x: "0px",
    y: "0px",
  });
  const [shouldChildrenActive, setShouldChildrenActive] =
    useState<boolean>(false);

  // effect mousemove
  useEffect(() => {
    const rect = targetAt?.current?.getBoundingClientRect();

    setStartPoint({
      w: (rect?.width ?? 0) + "px",
      h: (rect?.height ?? 0) + "px",
      x: (rect?.x ?? 0) + "px",
      y: (rect?.y ?? 0) + "px",
    });
  }, [targetAt?.current]);

  // Listen change active
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setShouldChildrenActive(true);
      }, 1201);
    }
  }, [active]);

  return (
    <BackdoorWrapper
      {...props}
      active={active}
      width={startPoint.w}
      height={startPoint.h}
      x={startPoint.x}
      y={startPoint.y}
    >
      {shouldChildrenActive ? children : null}
    </BackdoorWrapper>
  );
};

export default Backdoor;
