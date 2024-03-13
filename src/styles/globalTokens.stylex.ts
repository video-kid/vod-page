import * as stylex from '@stylexjs/stylex';

const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;

const FONT = {
  xxs: 0.8,
  xs: 1,
  sm: 1.2,
  p: 1.6,
  h5: 1.8,
  h4: 2.2,
  h3: 2.4,
  h2: 2.8,
  h1: 3.2,
};

export const text = stylex.defineVars({
  xxs: `${FONT.xxs}rem`,
  xs: `${FONT.xs}rem`,
  sm: `${FONT.sm}rem`,
  p: `${FONT.p}rem`,
  h5: `${FONT.h5}rem`,
  h4: `${FONT.h4}rem`,
  h3: `${FONT.h3}rem`,
  h2: `${FONT.h2}rem`,
  h1: `${FONT.h1}rem`,
});

export const globalTokens = stylex.defineVars({
  maxWidth: `${MAX_WIDTH}px`,
  minWidth: `${MIN_WIDTH}px`,
});
