import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import SistemaCard from './components/SistemaCard.jsx';

const TODAS = 'Todas';

export default function App() {
  const [sistemas, setSistemas] = useState([]);
  const [estado, setEstado] = useState('cargando');
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState(TODAS);

  useEffect(() => {
    fetch('/api/sistemas')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setSistemas(data);
        setEstado('listo');
      })
      .catch(() => setEstado('error'));
  }, []);

  const categorias = useMemo(
    () => [TODAS, ...new Set(sistemas.map((s) => s.categoria))],
    [sistemas]
  );

  const filtrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return sistemas.filter(
      (s) =>
        (categoria === TODAS || s.categoria === categoria) &&
        (!texto ||
          s.nombre.toLowerCase().includes(texto) ||
          s.descripcion.toLowerCase().includes(texto))
    );
  }, [sistemas, busqueda, categoria]);

  return (
    <>
      <Header />
      <main className="contenedor">
        <section className="intro">
          <h1>Sistemas de la compañía</h1>
          <p>Todas las aplicaciones que usamos en Iptel, en un solo lugar.</p>
        </section>

        <div className="filtros">
          <input
            type="search"
            className="buscador"
            placeholder="Buscar sistema..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {categorias.length > 2 && (
            <div className="chips">
              {categorias.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`chip ${c === categoria ? 'chip--activo' : ''}`}
                  onClick={() => setCategoria(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {estado === 'cargando' && <p className="mensaje">Cargando sistemas...</p>}
        {estado === 'error' && (
          <p className="mensaje mensaje--error">No se pudo cargar el listado de sistemas.</p>
        )}
        {estado === 'listo' && filtrados.length === 0 && (
          <p className="mensaje">No hay sistemas que coincidan con la búsqueda.</p>
        )}

        <div className="grilla">
          {filtrados.map((s) => (
            <SistemaCard key={s._id} sistema={s} />
          ))}
        </div>
      </main>
    </>
  );
}
