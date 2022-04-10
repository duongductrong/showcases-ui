import React, { FC, forwardRef, RefObject } from "react";
import styled from "styled-components";
import { fade, slideRight } from "../../configs/styled-components/animations";

export interface LogoProps {
  refAgency?: RefObject<HTMLElement>;

  size: "sm" | "md";
  color: "light" | "dark";
}

export interface LogoSizeProps {
  size?: "sm" | "md";
  color?: "light" | "dark";
}

const LogoWrapper = styled.h1<LogoSizeProps>`
  opacity: 0;

  font-size: ${(p) =>
    p.size === "md" ? "2.25rem" : p.size === "sm" ? "1.5rem" : "1rem"};
  text-transform: lowercase;

  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  animation: ${fade} 800ms linear forwards;
  animation-delay: 800ms;

  color: ${(p) =>
    p.color === "light"
      ? p.theme.white
      : p.color === "dark"
      ? p.theme.black
      : ""};

  margin: 0;
`;

const Brand = styled.span<LogoSizeProps>`
  opacity: 0;
  display: inline-block;
  font-size: ${(p) =>
    p.size === "md" ? "2.25rem" : p.size === "sm" ? "1.5rem" : "1rem"};
  text-transform: lowercase;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.black};

  animation: ${slideRight("100%")} 1200ms linear forwards;
  animation-delay: 1000ms;

  background-color: ${(p) =>
    p.color === "light"
      ? p.theme.yellow
      : p.color === "dark"
      ? p.theme.black
      : ""};
  color: ${(p) =>
    p.color === "light"
      ? p.theme.black
      : p.color === "dark"
      ? p.theme.yellow
      : ""};
`;

const Logo: FC<LogoProps> = forwardRef<HTMLElement, LogoProps>(
  ({ refAgency, size, color, ...props }, ref) => {
    return (
      <LogoWrapper color={color} size={size} ref={ref as any} {...props}>
        Creative
        <Brand color={color} size={size} ref={refAgency}>
          Agency
        </Brand>
      </LogoWrapper>
    );
  }
);

export default Logo;
