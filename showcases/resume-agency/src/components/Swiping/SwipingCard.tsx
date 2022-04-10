import React, { FC } from "react";
import styled from "styled-components";

export interface SwipingCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {
  numberOrder?: number | string;
  orderTitle?: string;

  tag?: string;
  title?: string;
  link?: string;
  src?: string;
}

export const SwipingCardWrapper = styled.div`
  min-height: 500px;
  font-family: "Inter";
  user-select: none;
`;

export const SwipingNumberOrder = styled.span`
  font-weight: 800;
  display: inline-block;
  font-size: 1.5rem;

  color: ${(p) => p.theme.black};
`;

export const SwipingOrderTitle = styled.h2`
  display: block;

  font-family: "Nunito";
  font-weight: 800;
  font-size: 1.5rem;
  margin: auto 0 1rem 0;

  color: ${(p) => p.theme.black};
`;

export const SwipingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SwipingTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${(p) => p.theme.white};
  margin-bottom: 1rem;
`;

export const SwipingButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  color: ${(p) => p.theme.black};
  background-color: ${(p) => p.theme.yellow};
  font-weight: 600;
  text-decoration: none;

  align-self: flex-start;
`;

export const SwipingContestation = styled.div`
  height: 100%;

  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-40%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 100;

  opacity: 0;

  transition: all 300ms ease;
`;

export const SwipingContent = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;

    transition: all 150ms linear;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    ${SwipingContestation} {
      opacity: 1;
      transform: translateY(-50%);
    }
  }
`;

const SwipingCard: FC<SwipingCardProps> = ({
  numberOrder,
  orderTitle,
  title,
  src,
  tag,

  link,
  ...props
}) => {
  return (
    <SwipingCardWrapper {...props}>
      <SwipingNumberOrder>{numberOrder}</SwipingNumberOrder>
      <SwipingOrderTitle>{orderTitle}</SwipingOrderTitle>

      <SwipingContent data-cursor="drag">
        <SwipingContestation data-cursor="drag">
          <SwipingTitle
            data-cursor="drag"
            dangerouslySetInnerHTML={{ __html: title?.toString() ?? "" }}
          ></SwipingTitle>

          <SwipingButton href={link}>View case study</SwipingButton>
        </SwipingContestation>

        <SwipingImage data-cursor="drag" src={src} alt={title} />
      </SwipingContent>
    </SwipingCardWrapper>
  );
};

export default SwipingCard;
