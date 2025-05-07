import { Container, CssBaseline, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
    breakpoints: {
      values: {
          xs: 0, 
          sm: 480, 
          md: 768, 
          lg: 1024, 
          xl: 1280
      }
  },
    shape: { borderRadius: 4 },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Responsive MUI + React Site
        </Typography>
        <Typography>
          This layout adjusts based on screen size and system theme.
        </Typography>
      </Container>
    </ThemeProvider>
  )
}

export default App
