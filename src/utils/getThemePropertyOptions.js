import theme from '../theme.json';

export default (themeProperty, valueIsKey = false) => Object.entries(theme[themeProperty]).map(([key, value]) => ({
  label: key,
  value: valueIsKey ? key : value,
}));