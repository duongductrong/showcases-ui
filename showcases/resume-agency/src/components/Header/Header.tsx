import React, { FC } from "react";
import { FaFingerprint } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../Logo/Logo";

export interface HeaderProps {}

export interface HeaderListMenuProps {}

export interface HeaderListItemProps {
  active?: boolean;
}

const HeaderWrapper = styled.nav`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div``;

const HeaderListMenu = styled.div<HeaderListMenuProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Nunito";
`;

const HeaderListItem = styled.a<HeaderListItemProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  font-family: "Nunito";
  font-size: ${(p) => (p.active ? "1.125rem" : "1rem")};
  font-weight: ${(p) => (p.active ? 800 : 700)};
  padding: 0.15rem 0;
  color: ${(p) => p.theme.black};

  &::after {
    content: "";
    height: ${(p) => (p.active ? "2px" : null)};
    width: ${(p) => (p.active ? "100%" : null)};
    background-color: ${(p) => p.theme.black};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Logo color="dark" size="sm" />
      </HeaderLogo>

      <HeaderListMenu>
        <HeaderListItem active>Our work</HeaderListItem>
        <HeaderListItem>Our services</HeaderListItem>
        <HeaderListItem>About us</HeaderListItem>
        <HeaderListItem>Contact</HeaderListItem>
      </HeaderListMenu>

      <HeaderListItem data-cursor="open">
        Touching
        <FaFingerprint size={24} />
      </HeaderListItem>
    </HeaderWrapper>
  );
};

export default Header;
