import './App.css'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SearchProvider } from './contexts/SearchContext'
import {
  Header,
  Footer,
  RouteDocumentation,
  TopScrollButton,
} from './components'
import {
  WelcomePage,
  LoginPage,
  AboutUsPage,
  TermsOfServicePage,
  PrivacyPage,
  SecurityPage,
} from './pages'

function App() {
  const location = useLocation()

  const routeDocLinks = [
    { href: '/aboutus', component: <AboutUsPage /> },
    { href: '/terms', component: <TermsOfServicePage /> },
    { href: '/privacy', component: <PrivacyPage /> },
    { href: '/security', component: <SecurityPage /> },
  ]

  const renderrouteDocPages = (paths) => {
    return paths.map((path, index) => (
      <Route
        key={index}
        path={path.href}
        element={<RouteDocumentation>{path.component}</RouteDocumentation>}
      ></Route>
    ))
  }

  return (
    <div className='App d-flex flex-column min-vh-100'>
      <SearchProvider>
        <Header />

        <main>
          <Routes>
            <Route path='' element={<WelcomePage />}></Route>

            <Route path='login' element={<LoginPage />}></Route>

            {renderrouteDocPages(routeDocLinks)}
          </Routes>
        </main>

        <TopScrollButton />

        {location.pathname !== '/login' && <Footer />}
      </SearchProvider>
    </div>
  )
}

export default App
