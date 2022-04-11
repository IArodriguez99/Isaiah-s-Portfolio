import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/container.styled'
import Nav from './components/Nav'
import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    body: '#fff',
    footer: '#003333',
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
      <GlobalStyles />
      <Nav />
      <Container>
        
      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
