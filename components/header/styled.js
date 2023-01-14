import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../../constants/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  transition: all 0.3s ease;

  ${breakpoints.md(css`
    display: none;
  `)}
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.a`
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
`;

export const Option = styled.li`
  a {
    padding: 0.5rem 1rem;
    color: ${colors.dark};
    font-size: 1rem;
  }
`;

export const BurgerWrapper = styled.a`
  display: none;
  width: 24px;
  height: 24px;

  span {
    width: 100%;
    height: 100%;
  }

  ${breakpoints.md(css`
    display: block;
  `)}
`;

export const MobileMenu = styled.ul`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: transform 0.3s linear;
  background-color: #fff;
  z-index: 2;
  padding: 12px;

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
  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;
