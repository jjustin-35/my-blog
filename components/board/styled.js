import styled from 'styled-components';
import { bgColors } from '../../constants/styled';

export const Outer = styled.div`
  background-color: ${bgColors.primary};
  position: relative;
  z-index: 3;
`;
export const Wrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
`;
