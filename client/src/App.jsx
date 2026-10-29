import { useEffect, useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('consultando...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('sin conexión con la API'));
  }, []);

  return (
    <main>
      <h1>Consulta de Sitios</h1>
      <p>Estado de la API: {status}</p>
    </main>
  );
}
