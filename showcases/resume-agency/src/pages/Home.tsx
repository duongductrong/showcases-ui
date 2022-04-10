import React, { FC, useRef, useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import styled from "styled-components";
import Backdoor from "../components/Backdoor/Backdoor";
import Logo from "../components/Logo/Logo";
import { fade, slideRight } from "../configs/styled-components/animations";
import Products from "./Products";

export interface SeparateStyledProps {
  active?: boolean;
}

/** CSS */
const Wrapper = styled.section`
  max-width: calc(100% - calc(${(props) => props.theme.spacingBase} * 20));
  min-height: 100vh;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const BackgroundLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${fade} 800ms ease forwards;
  background-size: 100vw 100vh;
  background: linear-gradient(
      to right,
      rgba(7, 16, 29, 0.9),
      rgba(7, 16, 29, 0.9)
    ),
    url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80");
`;

const WrapperText = styled.div`
  font-family: "Nunito";
  max-width: 400px;

  position: fixed;
  bottom: 4rem;
  left: 4rem;
`;

const Separate = styled.div<SeparateStyledProps>`
  width: 0%;
  height: 4px;
  background-color: ${(p) => p.theme.yellow};

  animation: ${slideRight("35%")} 1200ms ease-in-out forwards;
  animation-delay: 1000ms;

  margin: 1.5rem 0;
`;

const Paragraph = styled.p`
  opacity: 0;
  font-size: 1.125rem;

  animation: ${fade} 1200ms linear forwards;
  animation-delay: 2000ms;
`;

const HighLight = styled.span`
  color: ${(p) => p.theme.yellow};
  font-weight: 700;
  display: inline-block;
  padding: 0.25rem;
  font-size: 1.125rem;
`;

const ArrowDown = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.yellow};
  margin-top: 1rem;

  animation: ${fade} 1200ms linear forwards;
  animation-delay: 2100ms;

  transition: all 300ms linear;
  font-weight: bold;

  svg {
    fill: ${p => p.theme.black};
  }
`;

/** Component */
export interface HomeProps {}

const Home: FC<HomeProps> = ({ ...props }) => {
  const backdoorTarget = useRef(null);
  const [openBackdoor, setOpenBackdoor] = useState(false);

  const onOpenBackdoor = () => {
    setOpenBackdoor(true);
  };

  return (
    <Wrapper {...props}>
      <BackgroundLoader />
      <WrapperText>
        <Logo color="light" size="md" refAgency={backdoorTarget} />

        <Separate />

        <Paragraph>
          We are building the component serve <br />
          <HighLight>Creative Site</HighLight> &
          <HighLight>Branding Agency</HighLight>
        </Paragraph>

        <ArrowDown data-cursor="open" onClick={onOpenBackdoor}>
          <FaFingerprint data-cursor="open" />
        </ArrowDown>
      </WrapperText>

      {/* Backdoor and open new GUI */}
      <Backdoor active={openBackdoor} targetAt={backdoorTarget}>
        <Products />
      </Backdoor>
      {/* /Backdoor and open new GUI */}
    </Wrapper>
  );
};

export default Home;
