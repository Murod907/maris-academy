'use client'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main style={{
      minHeight: '100vh',
      background: '#F5C300',
      fontFamily: 'sans-serif',
    }}>
      {/* Header */}
      <div style={{
        background: '#F5C300',
        padding: '40px 24px 30px',
        textAlign: 'center',
      }}>
        <div style={{
          width: 70, height: 70,
          background: '#000',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 12px',
          fontSize: 32, fontWeight: 900, color: '#F5C300',
        }}>M</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: '#000', letterSpacing: 3 }}>MARIS</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#000', letterSpacing: 4, opacity: 0.7 }}>ACADEMY</div>
      </div>

      {/* Card */}
      <div style={{
        background: '#fff',
        borderRadius: '28px 28px 0 0',
        padding: '32px 24px',
        minHeight: '60vh',
      }}>
        <h2 style={{
          fontSize: 26, fontWeight: 900, color: '#000',
          textAlign: 'center', marginBottom: 28,
        }}>Sign In</h2>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#666', display: 'block', marginBottom: 8 }}>Login</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%', padding: '16px',
              borderRadius: 14, border: '2px solid #F0F0F0',
              fontSize: 15, boxSizing: 'border-box', outline: 'none',
              background: '#F9F9F9',
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#666', display: 'block', marginBottom: 8 }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Parol"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '16px',
                borderRadius: 14, border: '2px solid #F0F0F0',
                fontSize: 15, boxSizing: 'border-box', outline: 'none',
                background: '#F9F9F9',
              }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute', right: 16, top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none',
                fontSize: 18, cursor: 'pointer', color: '#999',
              }}
            >
              {showPassword ? '👁️' : '🙈'}
            </button>
          </div>
        </div>

        <button style={{
          width: '100%', padding: '16px',
          background: '#000', color: '#F5C300',
          border: 'none', borderRadius: 50,
          fontSize: 16, fontWeight: 800,
          cursor: 'pointer', letterSpacing: 1,
        }}>
          KIRISH
        </button>

        <p style={{
          textAlign: 'center', color: '#999',
          fontSize: 12, marginTop: 24,
        }}>
          IELTS tayyorgarligi platformasi
        </p>
      </div>
    </main>
  )
}
