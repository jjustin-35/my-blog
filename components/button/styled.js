import styled, { css } from 'styled-components';
import { bgColors } from '../../constants/styles';

export const Wrapper = styled.button`
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || bgColors.primary};
  ${({ type }) =>
    type === 'pill' &&
    css`
      border-radius: 999em;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 20px;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 14px;
    `}
`;
