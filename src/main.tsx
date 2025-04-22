
import "./assets/css/main.css"


// React Library
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


// Provider
import { ThemeProvider } from "./context/ThemeContext"

// Pages
import Home from './pages/Home'
import ErrorPage from "./pages/ErrorPage"



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sayfa-bulunamadi' element={<ErrorPage />}></Route>
      <Route path='*' element={<Navigate to="/sayfa-bulunamadi" />}></Route>

    </Routes>
  )
}


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)

export default App;