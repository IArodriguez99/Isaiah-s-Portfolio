import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/container.styled'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
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
      <Container>
        <Nav />
        <Intro />
        <Projects />
      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
