import styled from 'styled-components';
import { bgColors, fontWeight } from '../../constants/styles';

export const MarkdownWrapper = styled.div`
  font-size: 1rem;
  font-weight: ${fontWeight.regular};
  h1 {
    font-size: 2.5rem;
    font-weight: ${fontWeight.bold};
    margin: 2rem 0;
  }
  h2 {
    font-size: 2rem;
    font-weight: ${fontWeight.bold};
    margin: 1.5rem 0;
  }
  h3 {
    font-size: 1.75rem;
    margin: 1rem 0;
  }
  h4 {
    font-size: 1.5rem;
  }
  p {
    margin: 0.5rem 0;
  }
  ol,
  ul {
    list-style-position: inside;
  }

  code {
    background-color: ${bgColors.codeBlock};
    display: block;
  }
`;
