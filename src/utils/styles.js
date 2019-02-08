import { style } from 'styled-system';

import theme from '../theme.json';

export const background = style({
  prop: 'color',
  cssProperty: 'background',
  key: 'colors',
});

export const boxShadow = style({
  prop: 'shadow',
  cssProperty: 'box-shadow',
  key: 'effects',
});

export const width = style({
  prop: 'size',
  cssProperty: 'width',
  transformValue: size => theme.spacing[size],
});

export const height = style({
  prop: 'size',
  cssProperty: 'height',
  transformValue: size => theme.spacing[size],
});

export const fontStyles = style({
  prop: 'fontStyle',
  cssProperty: 'font-family',
  transformValue: style => `
    '${theme.fonts[style].fontFamily}';
    font-size: ${theme.fonts[style].fontSize}px;
    font-weight: ${theme.fonts[style].fontWeight};
    line-height: ${theme.fonts[style].lineHeightPx}px;
    letter-spacing: ${theme.fonts[style].letterSpacing}px;
  `,
});