export default function Dashboard() {
  return (
    <main style={{ minHeight: '100vh', background: '#F5F5F5', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#000', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: '#F5C300', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#000' }}>M</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>MARIS</div>
            <div style={{ color: '#F5C300', fontSize: 10 }}>ACADEMY</div>
          </div>
        </div>
        <div style={{ color: '#fff', fontSize: 20 }}>🔔</div>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ fontSize: 22, fontWeight: 800 }}>👋 Salom, Murodjon!</div>
      </div>
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ color: '#999', fontSize: 13 }}>So'nggi test natijasi</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#F5C300', lineHeight: 1 }}>7.0</div>
            <div style={{ color: '#999', fontSize: 13 }}>IELTS Band Score</div>
          </div>
          <div style={{ fontSize: 80 }}>🎓</div>
        </div>
      </div>
      <div style={{ padding: '0 20px 100px' }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Ko'nikmalar</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { name: 'Listening', score: 7.0, color: '#3B82F6' },
            { name: 'Reading', score: 6.5, color: '#10B981' },
            { name: 'Writing', score: 6.0, color: '#F59E0B' },
            { name: 'Speaking', score: 7.5, color: '#EC4899' },
          ].map(skill => (
            <div key={skill.name} style={{ background: skill.color, borderRadius: 16, padding: '16px', color: '#fff' }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{skill.name}</div>
              <div style={{ fontSize: 28, fontWeight: 900, marginTop: 4 }}>{skill.score}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #E5E7EB', display: 'flex', padding: '10px 0' }}>
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '📝', label: 'Darslar' },
          { icon: '🗺️', label: 'Roadmap' },
          { icon: '📅', label: 'Bookings' },
          { icon: '⋯', label: 'More' },
        ].map((item, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ fontSize: 22 }}>{item.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? '#F5C300' : '#999' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
