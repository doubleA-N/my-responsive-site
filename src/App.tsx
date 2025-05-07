import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from './components/header'
import NumberCounterButtons from './components/number-counter-button'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
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
       <Header />
       <NumberCounterButtons />
      </Container>
    </ThemeProvider>
  )
}

export default App
