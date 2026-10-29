import { useEffect, useState } from 'react';
import logoBlanco from './assets/logo-iptel-blanco.svg';

export default function App() {
  const [status, setStatus] = useState('consultando...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('sin conexión con la API'));
  }, []);

  return (
    <>
      <header style={{ background: 'var(--iptel-violeta)', padding: '1rem 1.5rem' }}>
        <img src={logoBlanco} alt="Iptel" height="40" />
      </header>
      <main style={{ padding: '1.5rem' }}>
        <h1>Consulta de Sitios</h1>
        <p>Estado de la API: {status}</p>
      </main>
    </>
  );
}
