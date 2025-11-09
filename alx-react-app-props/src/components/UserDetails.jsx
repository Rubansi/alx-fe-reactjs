import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function UserDetails() {
  const userData = useContext(UserContext)

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '6px'
    }}>
      <p style={{ 
        fontSize: '18px',
        color: '#333',
        marginBottom: '10px'
      }}>
        Name: <span style={{ fontWeight: 'bold' }}>{userData.name}</span>
      </p>
      <p style={{ 
        fontSize: '18px',
        color: '#333'
      }}>
        Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span>
      </p>
    </div>
  )
}

export default UserDetails