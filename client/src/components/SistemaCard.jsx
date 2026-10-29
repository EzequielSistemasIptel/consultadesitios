const ACENTOS = ['violeta', 'naranja', 'violeta-brillante', 'aqua'];

// Mismo color para todas las cards de una categoría.
function acentoDeCategoria(categoria) {
  let hash = 0;
  for (const letra of categoria) hash = (hash + letra.charCodeAt(0)) % ACENTOS.length;
  return ACENTOS[hash];
}

export default function SistemaCard({ sistema }) {
  const acento = acentoDeCategoria(sistema.categoria);

  return (
    <a
      className={`card card--${acento}`}
      href={sistema.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card__icono">
        {sistema.icono ? (
          <img src={sistema.icono} alt="" />
        ) : (
          <span>{sistema.nombre.charAt(0).toUpperCase()}</span>
        )}
      </div>
      <div className="card__cuerpo">
        <span className="card__categoria">{sistema.categoria}</span>
        <h3 className="card__nombre">{sistema.nombre}</h3>
        {sistema.descripcion && <p className="card__descripcion">{sistema.descripcion}</p>}
      </div>
      <span className="card__accion">Abrir</span>
    </a>
  );
}
