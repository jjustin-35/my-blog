import styled from 'styled-components';
import { bgColors } from '../../constants/styles';

export const Outer = styled.div`
  position: relative;
  z-index: 1;
`;

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
  padding: 48px 0;
  background-color: #fff;
  transform: translateY(-12px);
`;

export const Inner = styled.div`
  padding: 0 15px;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
`;
