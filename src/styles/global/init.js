import { css } from 'styled-components';
import { darkColorsTheme, lightColorsTheme } from 'styles/theme';

const init = css`
  html {
    height: 100%;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.init};

    --color-background: ${lightColorsTheme.colors.background};
    --color-backgroundAccent: ${lightColorsTheme.colors.backgroundAccent};
    --color-foreground: ${lightColorsTheme.colors.foreground};
    --color-foregroundAccent: ${lightColorsTheme.colors.foregroundAccent};
    --color-foregroundError: ${lightColorsTheme.colors.foregroundError};
    --color-border: ${lightColorsTheme.colors.border};

    &.dark {
      --color-background: ${darkColorsTheme.colors.background};
      --color-backgroundAccent: ${darkColorsTheme.colors.backgroundAccent};
      --color-foreground: ${darkColorsTheme.colors.foreground};
      --color-foregroundAccent: ${darkColorsTheme.colors.foregroundAccent};
      --color-foregroundError: ${darkColorsTheme.colors.foregroundError};
      --color-border: ${lightColorsTheme.colors.border};
    }
  }
  body {
    height: 100%;
    width: 100%;
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-size: ${(props) => props.theme.fontSizes.base};
    line-height: ${(props) => props.theme.lineHeights.base};
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: 'liga', 'tnum', 'case', 'calt', 'zero', 'ss01',
      'locl';
  }
`;

export default init;
