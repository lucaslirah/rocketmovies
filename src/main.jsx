import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { Profile } from './pages/Profile'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Profile/>
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)