import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    
* {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;  
}

h1{
    font-size: 5rem;
}

h3{
    font-size: 1.5rem;
    opactiy: 0.2;
}

p {
    font-size: 2rem;
    line-height: 1.5;
    opactiy: 0.6;
}
`

export default GlobalStyles