import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SearchProvider } from './contexts/SearchContext';
import Header from './components/Header/Header';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='App'>
      <SearchProvider>
        <Routes>
          <Route path='' element={
            <> 
              <Header /> 
              <WelcomePage /> 
            </>
          }></Route>
          
          <Route path='login' element={
            <> 
              <Header /> 
              <LoginPage /> 
            </>
          }></Route>
        </Routes>
      </SearchProvider>
    </div>
  );
};

export default App;
