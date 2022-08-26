import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ReactElement } from 'react';
import { theme } from './theme';

interface Props {
    children?: ReactElement | ReactElement[]
}

export const AppTheme = ({ children }:Props) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
