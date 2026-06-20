'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main style={{
      minHeight: '100vh',
      background: '#0B1F3A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h1 style={{
          color: '#0B1F3A',
          fontSize: '28px',
          fontWeight: 900,
          textAlign: 'center',
          marginBottom: '4px',
        }}>
          Maris Academy
        </h1>
        <p style={{
          color: '#C9922A',
          textAlign: 'center',
          marginBottom: '32px',
          fontSize: '14px',
        }}>
          IELTS tayyorgarligi platformasi
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            border: '2px solid #E5E7EB',
            fontSize: '15px',
            marginBottom: '12px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />

        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            border: '2px solid #E5E7EB',
            fontSize: '15px',
            marginBottom: '20px',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />

        <button style={{
          width: '100%',
          padding: '14px',
          background: '#C9922A',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: '16px',
          fontWeight: 700,
          cursor: 'pointer',
        }}>
          Kirish
        </button>
      </div>
    </main>
  )
}
