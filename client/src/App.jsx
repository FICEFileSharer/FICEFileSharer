import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SearchProvider } from './contexts/SearchContext';
import Header from './components/Header/Header';
import TopScrollButton from './components/buttons/TopScrollButton/TopScrollButton';
import Footer from './components/Footer';
import Sidebar from './components/sidebar/Sidebar/Sidebar';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className='App d-flex flex-column min-vh-100'>
      <SearchProvider>
        <Routes>
          <Route path='' element={
            <> 
              <Header /> 
              <WelcomePage /> 
              <TopScrollButton />
              <Footer />
            </>
          }></Route>
          
          <Route path='login' element={
            <> 
              <Header /> 
              <LoginPage /> 
            </>
          }></Route>

          <Route path='/aboutus' element={
            <> 
              <Header /> 
              <div className='d-flex'>
                <Sidebar />
                <AboutUsPage /> 
              </div>
              <TopScrollButton />
              <Footer />
            </>
          }></Route>
        </Routes>
      </SearchProvider>
    </div>
  );
};

export default App;
