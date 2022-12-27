import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../../constants/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  background-color: transparent;

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

export const Options = styled.ul`
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
