import styled, { css } from 'styled-components';
import { bgColors, colors } from '../../constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${colors.grey};
  transform-origin: left left;
  transform: translateX(22px);
  transition: transform 0.3s linear;

  ${({ isFocus }) =>
    isFocus &&
    css`
      transform: translateY(0) scaleY(0.75);
    `}
`;

export const InputField = styled.input`
  padding: 6px;
  border: 1px solid ${bgColors.dark};

  :focus {
    border: 1px solid ${bgColors.primary};
  }
`;
