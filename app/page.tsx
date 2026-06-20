'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Email yoki parol noto\'g\'ri!')
    } else {
      window.location.href = '/dashboard'
    }
    setLoading(false)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FFF176', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#FFF176', padding: '40px 24px 30px', textAlign: 'center' }}>
        <div style={{
          width: 70, height: 70, background: '#000', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 12px', fontSize: 32, fontWeight: 900, color: '#FFF176',
        }}>M</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: '#000', letterSpacing: 3 }}>MARIS</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#000', letterSpacing: 4, opacity: 0.7 }}>ACADEMY</div>
      </div>

      <div style={{ background: '#fff', borderRadius: '28px 28px 0 0', padding: '32px 24px', minHeight: '60vh' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, color: '#000', textAlign: 'center', marginBottom: 28 }}>Sign In</h2>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#666', display: 'block', marginBottom: 8 }}>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '16px', borderRadius: 14,
              border: '2px solid #F0F0F0', fontSize: 15,
              boxSizing: 'border-box', outline: 'none', background: '#F9F9F9',
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
                width: '100%', padding: '16px', borderRadius: 14,
                border: '2px solid #F0F0F0', fontSize: 15,
                boxSizing: 'border-box', outline: 'none', background: '#F9F9F9',
              }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute', right: 16, top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#999',
              }}
            >{showPassword ? '👁️' : '🙈'}</button>
          </div>
        </div>

        {error && <p style={{ color: 'red', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%', padding: '16px',
            background: loading ? '#999' : '#000',
            color: '#FFF176', border: 'none', borderRadius: 50,
            fontSize: 16, fontWeight: 800, cursor: 'pointer', letterSpacing: 1,
          }}
        >
          {loading ? 'Kirilmoqda...' : 'KIRISH'}
        </button><p style={{ textAlign: 'center', color: '#999', fontSize: 12, marginTop: 24 }}>
          IELTS tayyorgarligi platformasi
        </p>
      </div>
    </main>
  )
}
