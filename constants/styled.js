import styled, { css } from 'styled-components';

export const colors = {
  primary: 'black',
  secondary: '#FFF',
};

export const bgColors = {
  primary: '#FFF',
};

const breakdown = (query) => (style) =>
  css`
    @media screen and (max-width: ${query + 'px'}) {
      ${style};
    } ;
  `;

export const breakpoints = {
  xxxl: breakdown(1919),
  xxl: breakdown(1439),
  xl: breakdown(1279),
  lg: breakdown(1023),
  md: breakdown(767),
  sm: breakdown(575),
  xs: breakdown(479),
};

// container
export const Container = styled.div`
  max-width: 1170px;
  padding: 0 12px;
  margin: 0 auto;

  ${breakpoints.xl(css`
    max-width: 970px;
  `)}
  ${breakpoints.lg(css`
    max-width: 750px;
  `)};
  ${breakpoints.md(css`
    max-width: 535px;
  `)}
`;

// font
export const fontWeight = {
  light: '200',
  regular: '400',
  bold: '700',
};

const typogrophy = css`
  font-size: 1rem;
  font-weight: ${fontWeight.regular};
  margin: 0.5rem 0;
  color: ${({ color }) => color || `${colors.primary}`};
`;

export const P = styled.p`
  ${typogrophy};
`;

export const H1 = styled.h1`
  ${typogrophy};
  font-size: 4rem;
  font-weight: ${fontWeight.bold};
  margin: 2rem 0;
`;

export const H2 = styled.h2`
  ${typogrophy};
  font-size: 2.5rem;
  font-weight: ${fontWeight.bold};
  margin: 1.5rem 0;
`;

export const H3 = styled.h3`
  ${typogrophy};
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const H4 = styled.h4`
  ${typogrophy};
  font-size: 1.25rem;
`;

// link
export const Link = styled.a`
  ${typogrophy};
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'unset' : 'none')};
`;
