import 'styled-components';
import 'styled-system';
// import { ColorProps } from 'styled-system';
import { DefaultTheme } from 'styled-components';
export { default as MainStyle } from './globalStyles';
export { default as Icons } from './Icons';

// Edit Breakpoints and Colors here

export enum breakpoints {
  xs = '36em', // 576px
  sm = '48em', // 768px
  md = '62em', // 992px
  lg = '74.5em', // 1192px
  xl = '90em', // 1440px
}

export enum colors {
  primary = '#000',
  secondary = '#ccc',
  error = 'red',
  success = 'green',
}

// Interfaces
type ColorKeys = keyof typeof colors;
type BpKeys = keyof typeof breakpoints;

// Overwritten Global theme of Styled Components
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSizes: [10, 12, 14, 16, 20, 30];
    space: [0, 10, 20, 30, 40];
    breakpoints: string[];
    media: typeof breakpoints;
  }
}

const media = (Object.keys(breakpoints) as Array<BpKeys>).reduce(
  (acc: any, cur) => {
    const currBreakpoint = breakpoints[cur];
    acc[cur] = `@media (max-width: ${currBreakpoint})`;
    return acc;
  },
  {}
);

export const theme: DefaultTheme = {
  colors,
  space: [0, 10, 20, 30, 40],
  breakpoints: Object.values(breakpoints),
  fontSizes: [10, 12, 14, 16, 20, 30],
  media,
};
