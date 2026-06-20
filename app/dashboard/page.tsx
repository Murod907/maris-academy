'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [goalScore, setGoalScore] = useState('7.0')
  const [scoreType, setScoreType] = useState('IELTS')
  const [examDate, setExamDate] = useState('')
  const [editScore, setEditScore] = useState(false)
  const [editDate, setEditDate] = useState(false)

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
    <main style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'sans-serif', paddingBottom: 80 }}>

      {/* Header */}
      <div style={{ background: '#fff', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <img src="/logo.jpg" alt="Maris Academy" style={{ height: 40, objectFit: 'contain' }} />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 22, cursor: 'pointer' }}>🔔</span>
          <span style={{ fontSize: 22, cursor: 'pointer' }}>🌙</span>
          <div
            onClick={async () => { await supabase.auth.signOut(); window.location.href = '/' }}
            style={{ width: 36, height: 36, background: '#f0f0f0', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, cursor: 'pointer' }}
          >🚪</div>
        </div>
      </div>

      {/* Greeting */}
      <div style={{ padding: '16px 16px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 28 }}>👋</span>
        <span style={{ fontSize: 20, fontWeight: 800 }}>Hi {user.email?.split('@')[0]}</span>
      </div>

      {/* Exam Date Card */}
      <div style={{ margin: '16px 16px 12px', background: 'linear-gradient(135deg, #F5C300, #FFD54F)', borderRadius: 20, padding: '20px', position: 'relative', minHeight: 110 }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>📅</div>
        {examDate ? (
          <div style={{ fontSize: 18, fontWeight: 700, color: '#000' }}>
            {new Date(examDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        ) : (
          <div style={{ fontSize: 16, fontWeight: 700, color: '#000', cursor: 'pointer' }} onClick={() => setEditDate(true)}>
            + Set Exam Date →
          </div>
        )}
        {editDate && (
          <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
            <input
              type="date"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
              style={{ padding: '8px', borderRadius: 8, border: 'none', fontSize: 14, flex: 1 }}
            />
            <button onClick={() => setEditDate(false)} style={{ padding: '8px 16px', background: '#000', color: '#F5C300', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>✓</button>
          </div>
        )}
        <button
          onClick={() => setEditDate(true)}
          style={{ position: 'absolute', right: 16, bottom: 16, width: 40, height: 40, background: 'rgba(0,0,0,0.15)', borderRadius: '50%', border: 'none', fontSize: 16, cursor: 'pointer' }}
        >✏️</button>
      </div>
 {/* My Goal Score */}
      <div style={{ margin: '0 16px 12px', background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: '#999', fontWeight: 600, marginBottom: 4 }}>My Goal Score</div>
          <button onClick={() => setEditScore(true)} style={{ width: 36, height: 36, background: '#f0f0f0', borderRadius: '50%', border: 'none', fontSize: 16, cursor: 'pointer', marginBottom: 8 }}>✏️</button>
          {editScore ? (
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <button onClick={() => setScoreType('IELTS')} style={{ padding: '6px 14px', background: scoreType === 'IELTS' ? '#000' : '#f0f0f0', color: scoreType === 'IELTS' ? '#F5C300' : '#000', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>IELTS</button>
                <button onClick={() => setScoreType('CEFR')} style={{ padding: '6px 14px', background: scoreType === 'CEFR' ? '#000' : '#f0f0f0', color: scoreType === 'CEFR' ? '#F5C300' : '#000', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>CEFR</button>
              </div>
              <select
                value={goalScore}
                onChange={e => setGoalScore(e.target.value)}
                style={{ padding: '8px', borderRadius: 8, border: '2px solid #000', fontSize: 18, fontWeight: 700, width: '100%', marginBottom: 8 }}
              >
                {scoreType === 'IELTS'
                  ? ['1.0','1.5','2.0','2.5','3.0','3.5','4.0','4.5','5.0','5.5','6.0','6.5','7.0','7.5','8.0','8.5','9.0'].map(s => <option key={s} value={s}>{s}</option>)
                  : ['51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75'].map(s => <option key={s} value={s}>{s}</option>)
                }
              </select>
              <button onClick={() => setEditScore(false)} style={{ width: '100%', padding: '10px', background: '#000', color: '#F5C300', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
                Saqlash ✓
              </button>
            </div>
          ) : (
            <div style={{ fontSize: 52, fontWeight: 900, color: '#F5C300', lineHeight: 1 }}>{goalScore}</div>
          )}
          <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{scoreType}</div>
        </div>
        <img src="/POLAR.jpg" alt="bear" style={{ width: 130, height: 130, objectFit: 'contain' }} />
      </div>

      {/* Competitions */}
      <div style={{ margin: '0 16px 12px', background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => window.location.href = '/assessment'}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Competitions</div>
          <div style={{ fontSize: 13, color: '#999', marginTop: 4 }}>Musobaqalarga kirish →</div>
        </div>
        <span style={{ fontSize: 64 }}>🏆</span>
      </div>

      {/* Roadmap */}
      <div style={{ margin: '0 16px 12px', background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => window.location.href = '/roadmap'}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Roadmap</div>
          <div style={{ fontSize: 13, color: '#999', marginTop: 4 }}>Darslaringizni ko'rish →</div>
        </div>
        <span style={{ fontSize: 64 }}>🗺️</span>
      </div>
 {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #f0f0f0', display: 'flex', padding: '8px 0' }}>
        {[
          { icon: '⊞', label: 'Home', href: '/dashboard', active: true },
          { icon: '📋', label: 'Assessment', href: '/assessment', active: false },
          { icon: '⊹', label: 'Roadmaps', href: '/roadmap', active: false },
          { icon: '•••', label: 'More', href: '/more', active: false },
        ].map((item, i) => (
          <div key={i} onClick={() => window.location.href = item.href} style={{ flex: 1, textAlign: 'center', cursor: 'pointer', padding: '4px 0' }}>
            <div style={{ fontSize: 20, color: item.active ? '#F5C300' : '#999' }}>{item.icon}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: item.active ? '#F5C300' : '#999' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
