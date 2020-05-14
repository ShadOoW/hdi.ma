import { css } from 'styled-components';

const headings = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: normal;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1};
    line-height: ${(props) => props.theme.lineHeights.h1};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    line-height: ${(props) => props.theme.lineHeights.h2};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
    line-height: ${(props) => props.theme.lineHeights.h3};
  }
`;

export default headings;
