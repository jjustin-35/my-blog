import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const EditBoard = styled.div`
  width: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  border: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
`;

export const ResultBoard = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12px;
`;
