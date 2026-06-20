background: item.done ? '#000' : item.active ? '#F5C300' : '#E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 14,
                color: item.done ? '#F5C300' : item.active ? '#000' : '#999',
                flexShrink: 0,
              }}>
                {item.done ? '✓' : i + 1}
              </div>
              <div style={{
                fontWeight: 600, fontSize: 14,
                color: item.done || item.active ? '#000' : '#999',
              }}>
                {item.title}
              </div>
              <div style={{ marginLeft: 'auto', fontSize: 16 }}>
                {item.done ? '✅' : item.active ? '⚡' : '🔒'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: '#fff',
        borderTop: '1px solid #E5E7EB',
        display: 'flex',
        padding: '10px 0',
      }}>
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '📝', label: 'Darslar' },
          { icon: '🗺️', label: 'Roadmap' },
          { icon: '📅', label: 'Bookings' },
          { icon: '•••', label: 'More' },
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1, textAlign: 'center', cursor: 'pointer',
          }}>
            <div style={{ fontSize: 22 }}>{item.icon}</div>
            <div style={{
              fontSize: 11, fontWeight: 600,
              color: i === 0 ? '#F5C300' : '#999',
            }}>{item.label}</div>
          </div>
        ))}
      </div>
    </main>
  )
}