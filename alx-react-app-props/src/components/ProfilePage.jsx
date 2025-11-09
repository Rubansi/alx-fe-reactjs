import React from 'react'
import UserInfo from './UserInfo'

function ProfilePage() {
  return (
    <div style={{ 
      padding: '20px',
      margin: '20px auto',
      maxWidth: '600px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>User Profile</h1>
      <UserInfo />
    </div>
  )
}

export default ProfilePage