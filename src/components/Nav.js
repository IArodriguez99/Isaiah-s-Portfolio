import { Container } from './styles/container.styled'

import React, { useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
    <NavBar>
      <Logo href="">
        Isaiah Rodriguez
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Contact</MenuLink>
        <MenuLink href="">Resume</MenuLink>
      </Menu>
    </NavBar>
    </Container>
  );
};

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #131516;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  &:hover {
    color: #C;
  }
`;

const NavBar = styled.div`
  max-width: 70%;
  margin-inline: auto;
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #131516;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #131516;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Nav;
