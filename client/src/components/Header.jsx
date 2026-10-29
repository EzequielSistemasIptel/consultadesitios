import logoBlanco from '../assets/logo-iptel-blanco.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="contenedor header__contenido">
        <img src={logoBlanco} alt="Iptel" className="header__logo" />
        <span className="header__titulo">Sistemas</span>
      </div>
    </header>
  );
}
