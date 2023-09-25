import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { SignIn } from './pages/SignIn'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <SignIn/>
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)