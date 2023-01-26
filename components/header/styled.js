import styled, { css } from 'styled-components';
import Link from 'next/link';
import { colors, breakpoints, bgColors } from '../../constants/styles';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  ${({ isScrollDown }) =>
    isScrollDown &&
    css`
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
      background-color: #fff;
    `}
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled(Link)`
  width: 200px;
  img {
    width: 100%;
    display: block;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const Option = styled.li`
  a {
    padding: 12px 20px;
    color: ${colors.dark};
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    display: block;
    transition: color 0.3s ease, background-color 0.3s ease;

    :hover {
      color: #fff;
      background-color: ${bgColors.primary};
    }

    ${breakpoints.md(css`
      padding: 12px 30px;
    `)}
  }
`;

export const BurgerWrapper = styled.a`
  display: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  z-index: 5;

  span {
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s ease;

    ${({ isOpen }) =>
      isOpen &&
      css`
        &:first-child {
          transform: rotate(45deg) translate(0, 9.5px);
        }
        &:last-child {
          transform: rotate(-45deg) translateY(-9.5px);
        }
        &:nth-child(2) {
          transform: translateX(-100%);
          opacity: 0;
        }
      `}
  }

  ${breakpoints.md(css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `)}
`;

export const MobileMenu = styled.ul`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: transform 0.3s linear;
  background-color: #fff;
  z-index: 2;
  padding: 57px 12px 20px;
  list-style: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const BlackMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;
