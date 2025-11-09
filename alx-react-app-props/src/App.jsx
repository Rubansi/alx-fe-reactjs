import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage'
import { UserContext } from './context/UserContext'

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  }

  return (
    <UserContext.Provider value={userData}>
      <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '60px' }}>
        <Header />
        <MainContent />
        <WelcomeMessage />
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <ProfilePage />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App