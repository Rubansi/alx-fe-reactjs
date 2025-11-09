import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const buttonStyle = {
    padding: '8px 16px',
    margin: '0 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontWeight: 'bold'
  }

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ fontSize: '24px', color: '#333', margin: '20px 0' }}>
        Current Count: <span style={{ color: '#007bff' }}>{count}</span>
      </p>
      <div>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ ...buttonStyle, backgroundColor: '#28a745', color: 'white' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ ...buttonStyle, backgroundColor: '#dc3545', color: 'white' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ ...buttonStyle, backgroundColor: '#6c757d', color: 'white' }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter