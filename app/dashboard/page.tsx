'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [targetScore, setTargetScore] = useState('7.5')
  const [examDate, setExamDate] = useState('2025-07-15')
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        window.location.href = '/'
      } else {
        setUser(data.user)
      }
    }
    checkUser()
  }, [])

  if (!user) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', fontSize: 18 }}>
      Yuklanmoqda...
    </div>
  )

  return (
    <main style={{ minHeight: '100vh', background: '#F5F5F5', fontFamily: 'sans-serif', paddingBottom: 80 }}>

      <div style={{ background: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: '#FFF176', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#000', border: '2px solid #000' }}>M</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: 1 }}>MARIS</div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#666' }}>ACADEMY</div>
          </div>
        </div>
        <div style={{ fontSize: 22 }}>🔔</div>
      </div>

      <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, color: '#999' }}>Xush kelibsiz!</div>
          <div style={{ fontSize: 22, fontWeight: 900 }}>👋 Hi, {user.email?.split('@')[0]}!</div>
        </div>
        <img src="/polar.jpg" alt="bear" style={{ width: 90, height: 90, objectFit: 'contain' }} />
      </div>

      <div style={{ padding: '16px 20px 0' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
          <div style={{ color: '#999', fontSize: 13 }}>Last Test Result</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 4 }}>
            <div style={{ fontSize: 52, fontWeight: 900, color: '#FFF176', WebkitTextStroke: '2px #000', lineHeight: 1 }}>0</div>
            <div style={{ color: '#999', fontSize: 13, marginBottom: 8 }}>0/0</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '12px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ background: '#000', borderRadius: 16, padding: '16px', color: '#fff' }}>
          <div style={{ fontSize: 11, color: '#FFF176', fontWeight: 600 }}>🎯 Target Score</div>
          {editing ? (
            <input
              type="number"
              value={targetScore}
              onChange={e => setTargetScore(e.target.value)}
              style={{ fontSize: 24, fontWeight: 900, background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', marginTop: 4 }}
            />
          ) : (
            <div style={{ fontSize: 28, fontWeight: 900, marginTop: 4 }}>{targetScore}</div>
          )}
          <div style={{ fontSize: 11, color: '#999' }}>IELTS Band</div>
        </div>
        <div style={{ background: '#FFF176', borderRadius: 16, padding: '16px', color: '#000' }}>
<div style={{ fontSize: 11, color: '#000', fontWeight: 600 }}>📅 Exam Date</div>
          {editing ? (
            <input
              type="date"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
              style={{ fontSize: 14, fontWeight: 900, background: 'transparent', border: 'none', color: '#000', width: '100%', outline: 'none', marginTop: 4 }}
            />
          ) : (
            <div style={{ fontSize: 18, fontWeight: 900, marginTop: 4 }}>{new Date(examDate).toLocaleDateString('uz-UZ', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
          )}
        </div>
      </div>

      <div style={{ padding: '8px 20px 0', textAlign: 'right' }}>
        <button
          onClick={() => setEditing(!editing)}
          style={{ background: 'none', border: '1px solid #000', borderRadius: 8, padding: '4px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
        >
          {editing ? '✅ Saqlash' : '✏️ Tahrirlash'}
        </button>
      </div>

      <div style={{ padding: '12px 20px 0' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', cursor: 'pointer' }} onClick={() => window.location.href = '/roadmap'}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>🗺️ Roadmap</div>
          <div style={{ color: '#999', fontSize: 13 }}>Darslaringizni ko'rish →</div>
        </div>
      </div>

      <div style={{ padding: '12px 20px 0' }}>
        <div style={{ background: '#000', borderRadius: 20, padding: '20px', color: '#fff', cursor: 'pointer' }} onClick={() => window.location.href = '/assessment'}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#FFF176', marginBottom: 4 }}>🏆 Competition</div>
          <div style={{ color: '#999', fontSize: 13 }}>Musobaqalar →</div>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '2px solid #F5F5F5', display: 'flex', padding: '10px 0' }}>
        {[
          { icon: '🏠', label: 'Home', href: '/dashboard' },
          { icon: '📝', label: 'Assessment', href: '/assessment' },
          { icon: '🗺️', label: 'Roadmap', href: '/roadmap' },
          { icon: '⋯', label: 'More', href: '/more' },
        ].map((item, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} onClick={() => window.location.href = item.href}>
            <div style={{ fontSize: 22 }}>{item.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: i === 0 ? '#000' : '#999' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
