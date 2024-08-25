import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="error">
      <p className="error__number">404</p>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__home-link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
