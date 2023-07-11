
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { CartContext, CartContextProvider } from './context/contextData'



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
