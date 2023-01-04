import styled from 'styled-components';
import { fontWeight } from '../../constants/styled';

export const MarkdownWrapper = styled.div`
  font-size: 1rem;
  font-weight: ${fontWeight.regular};
  h1 {
    font-size: 4rem;
    font-weight: ${fontWeight.bold};
    margin: 2rem 0;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: ${fontWeight.bold};
    margin: 1.5rem 0;
  }
  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  h4 {
    font-size: 1.25rem;
  }
  p {
    margin: 0.5rem 0;
  }
`;
