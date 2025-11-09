import React from 'react'

function Footer() {
  return (
    <footer style={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
      }}>
      <p style={{ margin: '0', fontSize: '0.9rem' }}>2023 City Lovers</p>
    </footer>
  )
}

export default Footer
