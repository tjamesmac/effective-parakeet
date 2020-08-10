import styled, { css } from 'styled-components';

const common = css`
  color: ${props => props.theme.color.primary};
  text-decoration: none;
  text-decoration-style: none;
`;

export const H1 = styled.h1`
  ${common}
  font-size: ${props => props.theme.font.xl};
`;
export const H2 = styled.h2`
  ${common}
  font-size: ${props => props.theme.font.lg};
`;
export const H3 = styled.h3`
  ${common}
  font-size: ${props => props.theme.font.md};
`;
export const H4 = styled.h4`
  ${common}
  font-size: ${props => props.theme.font.sm};
`;
export const H5 = styled.h5`
  ${common}
  font-size: ${props => props.theme.font.xs};
`;
