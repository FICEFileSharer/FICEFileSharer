import './App.css'
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/loginPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='welcome' element={<WelcomePage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
