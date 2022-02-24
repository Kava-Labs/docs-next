// MUI Types
import {
  ButtonProps as MUIButtonProps,
  GridSpacing as MUIGridSpacing,
} from '@material-ui/core';

export type ButtonProps = MUIButtonProps;
export type GridSpacing = MUIGridSpacing;

// MUI wraps
export * from './Paper';
export * from './Typography';
export * from './Box';
export {
  Button,
  IconButton,
  Grid,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  InputLabel,
  RootRef,
  Dialog,
  InputAdornment,
} from '@material-ui/core';

// Our shared components
export * from './Link';
export * from './ToolTip';
export { default as Toggle } from './Toggle';
export { default as Input } from './Input';
export * from './HoverTip';