import styled from 'styled-components';
import data from './data';

export const Wrapper = styled.section`
  background-image: url(${data.bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BlackBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const Text = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 5rem;
`;
