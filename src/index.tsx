import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
 components: {
  MuiLink: {
   defaultProps: {
    color: 'rgba(0, 0, 0, 0.54)',
   },
   styleOverrides: {
    root: {
     textDecoration: 'none',
    },
   },
  },
 },
})

const root = ReactDOM.createRoot(document.querySelector('#root')!)
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <ThemeProvider theme={theme}>
    <AppRoutes />
   </ThemeProvider>
  </BrowserRouter>
 </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
