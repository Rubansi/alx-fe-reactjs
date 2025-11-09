import React from 'react'

const UserProfile = (props) => {
  return (
    <div style={{ 
        border: '1px solid gray', 
        borderRadius: '8px',
        padding: '20px', 
        margin: '20px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
      <h2 style={{ color: '#2c3e50', marginTop: '0' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: '#3498db' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic', color: '#555' }}>{props.bio}</span></p>
    </div>
  )
}

export default UserProfile
