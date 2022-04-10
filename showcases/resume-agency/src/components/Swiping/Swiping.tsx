import React, { FC, MouseEvent, useState } from "react";
import styled from "styled-components";
import { fade } from "../../configs/styled-components/animations";
import SwipingCard, { SwipingCardWrapper } from "./SwipingCard";

export interface SwipingProps {}

const SwipingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4rem;

  overflow: hidden;
  width: 100%;

  ${SwipingCardWrapper} {
    flex: 1 0 calc(calc(100% / 2) - 4rem);

    animation: ${fade} 500ms linear;
    transition: all 100ms linear;
  }
`;

export const PER_SCREEN = 2;
export const GAP = 4 * 16;

const Swiping: FC<SwipingProps> = ({ ...props }) => {
  const screenWidth = window.innerWidth;
  const maxScreen = (screenWidth / 3 - GAP) * 4;

  const [translateX, setTranslateX] = useState(() => {
    // Moving 1/3 screen
    return screenWidth / 3 - GAP;
  });
  const [prevTranslateX, setPrevTranslateX] = useState(translateX);
  const [touchedAt, setTouchedAt] = useState(0);
  const [touched, setTouched] = useState<boolean>(false);

  const onTouched = (isTouched: boolean) => (e: MouseEvent<HTMLDivElement>) => {
    const at = e.pageX;

    setTouched(isTouched);
    setTouchedAt(at);
  };

  const onSwiping = (e: MouseEvent<HTMLDivElement>) => {
    let currentTranslateX = translateX;

    if (touched) {
      let moveTo = e.pageX;
      currentTranslateX = prevTranslateX + moveTo - touchedAt;

      if (currentTranslateX > screenWidth / 3 - GAP) {
        setTimeout(() => {
          setTranslateX(screenWidth / 3 - GAP);
        }, 100);
      } else if (Math.abs(currentTranslateX) > maxScreen) {
        setTimeout(() => {
          setTranslateX(-maxScreen);
        }, 100);
      }

      setTranslateX(currentTranslateX);
    } else {
      setPrevTranslateX(currentTranslateX);
    }
  };

  return (
    <SwipingContainer
      onMouseDown={onTouched(true)}
      onMouseUp={onTouched(false)}
      onMouseMove={onSwiping}
    >
      <SwipingCard
        numberOrder={"01."}
        orderTitle="Apple watch series 7 pro"
        title="Apple watch ecosystem new version <br/> in 2022 year"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rpo.jpg"
        link="/"
        style={{ transform: `translateX(${translateX}px)` }}
      />

      <SwipingCard
        numberOrder={"02."}
        orderTitle="Apple watch series 7 pro"
        title="Apple watch ecosystem new version <br/> in 2022 year"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/orangetyhing.png"
        link="/"
        style={{ transform: `translateX(${translateX}px)` }}
      />

      <SwipingCard
        numberOrder={"03."}
        orderTitle="Apple watch series 7 pro"
        title="Apple watch ecosystem new version <br/> in 2022 year"
        src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
        link="/"
        style={{ transform: `translateX(${translateX}px)` }}
      />

      <SwipingCard
        numberOrder={"04."}
        orderTitle="Apple watch series 7 pro"
        title="Apple watch ecosystem new version <br/> in 2022 year"
        src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
        link="/"
        style={{ transform: `translateX(${translateX}px)` }}
      />
    </SwipingContainer>
  );
};

export default Swiping;
