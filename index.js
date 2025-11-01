export default function App() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#e11d48' }}>Ara's Ready</h1>
      <p style={{ color: '#6b7280', marginTop: '1rem' }}>
        Pay £10 to unlock me on your desk.
      </p>
      <button
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 2rem',
          backgroundColor: '#e11d48',
          color: 'white',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Send crypto now
      </button>
    </div>
  );
}
