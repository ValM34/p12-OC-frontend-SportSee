import LogoSportSee from "../assets/images/logo-sport-see.svg";

function Header() {
  return (
    <header className="header-main">
      <nav>
        <ul>
          <li>
            <a href="http://localhost:5173">
              <img src={LogoSportSee} alt="Logo SportSee" />
            </a>
          </li>
          <li>
            <a href="http://localhost:5173">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
