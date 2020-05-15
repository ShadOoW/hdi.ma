import { invert } from 'polished';

export const fontSizeInit = '10px';

export const fontSizeBase = '1.4rem';
export const lineHeightBase = '1.4rem';

export const fontSizeSmall = '1.2rem';
export const lineHeightSmall = '1.4rem';

export const fontSizeH1 = '4.4rem';
export const lineHeightH1 = '4.8rem';

export const fontSizeH2 = '1.8rem';
export const lineHeightH2 = '2.4rem';

export const fontSizeH3 = fontSizeBase;
export const lineHeightH3 = lineHeightBase;

export const fontSizeLabel = fontSizeSmall;
export const lineHeightLabel = lineHeightSmall;

export const backgroundAccent = '#f4f6fb';
export const background = '#fafafa';
export const foreground = '#041133';

export const foregroundAccent = '#02c39a';
export const foregroundError = '#f45b69';

export const border = '#88888866';

export const breakpointLarger = '1201px';
export const breakpointLarge = '1200px';
export const breakpointMedium = '920px';
export const breakpointSmall = '640px';

export const cssVarColorsNames = {
  background: 'var(--color-background)',
  backgroundAccent: 'var(--color-backgroundAccent)',
  foreground: 'var(--color-foreground)',
  foregroundAccent: 'var(--color-foregroundAccent)',
  foregroundError: 'var(--color-foregroundError)',
  border: 'var(--color-border)',
};

export const darkColorsTheme = {
  colors: {
    background: invert(background),
    backgroundAccent: invert(backgroundAccent),
    foreground: invert(foreground),
    foregroundAccent: invert(foregroundAccent),
    foregroundError,
    border: invert(foregroundAccent),
  },
};

export const lightColorsTheme = {
  colors: {
    background,
    backgroundAccent,
    foreground,
    foregroundAccent,
    foregroundError,
    border,
  },
};

const theme = {
  space: ['0', '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem'],
  sizes: { small: 640, medium: 920, large: 1200, larger: 1585 },
  lineHeights: {
    base: lineHeightBase,
    small: lineHeightSmall,
    h1: lineHeightH1,
    h2: lineHeightH2,
    h3: lineHeightH3,
    label: lineHeightLabel,
  },
  fontSizes: {
    init: fontSizeInit,
    base: fontSizeBase,
    small: fontSizeSmall,
    h1: fontSizeH1,
    h2: fontSizeH2,
    h3: fontSizeH3,
    label: fontSizeLabel,
  },
  borders: { basic: 'solid .125rem' },
  breakpoints: [
    breakpointSmall,
    breakpointMedium,
    breakpointLarge,
    breakpointLarger,
  ],
  radii: { pill: '9999px' },
  zIndex: 9999,
  buttons: {
    primary: {
      color: 'white',
      bg: 'red',
    },
    secondary: {
      color: 'white',
      bg: 'tomato',
    },
  },
};

export default theme;
