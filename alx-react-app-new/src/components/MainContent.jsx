import React from 'react'

function MainContent() {
  return (
    <main style={{
        padding: '2rem',
        margin: '20px auto',
        maxWidth: '800px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#333',
        textAlign: 'center'
      }}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  )
}

export default MainContent
