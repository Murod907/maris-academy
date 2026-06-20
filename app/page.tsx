'use client'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '40px',
        width: '100%',
        maxWidth: '380px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{
          width: '80px',
          height: '80px',
          background: '#F5C300',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          fontSize: '36px',
          fontWeight: 900,
          color: '#000',
        }}>
          M
        </div>

        <h1 style={{
          color: '#000000',
          fontSize: '26px',
          fontWeight: 900,
          marginBottom: '4px',
          letterSpacing: '2px',
        }}>
          MARIS
        </h1>
        <p style={{
          color: '#666',
          fontSize: '13px',
          letterSpacing: '3px',
          marginBottom: '32px',
        }}>
          ACADEMY
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '12px',
            border: '2px solid #E5E7EB',
            fontSize: '15px',
            marginBottom: '12px',
            boxSizing: 'border-box',
            outline: 'none',
            textAlign: 'left',
          }}
        />

        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '12px',
            border: '2px solid #E5E7EB',
            fontSize: '15px',
            marginBottom: '24px',
            boxSizing: 'border-box',
            outline: 'none',
            textAlign: 'left',
          }}
        />

        <button style={{
          width: '100%',
          padding: '15px',
          background: '#F5C300',
          color: '#000',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 800,
          cursor: 'pointer',
          letterSpacing: '1px',
        }}>
          KIRISH
        </button>

        <p style={{
          color: '#999',
          fontSize: '12px',
          marginTop: '24px',
        }}>
          IELTS tayyorgarligi platformasi
        </p>
      </div>
    </main>
  )
}
