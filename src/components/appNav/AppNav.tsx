import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AppNav() {
  const homeNavLink = useRef<HTMLAnchorElement | null>(null);
  const aboutNavLink = useRef<HTMLAnchorElement | null>(null);

  const { pathname } = useLocation();

  const selectedClassName = "nav__link--selected";

  useEffect(() => {
    const links = [homeNavLink.current, aboutNavLink.current];

    //Gère sous-lignage du lien selon la page
    const updateLinkSelection = (selectedLink: HTMLAnchorElement | null) => {
      links.forEach((link) => {
        if (link) {
          if (link === selectedLink) {
            link.classList.add(selectedClassName);
          } else {
            link.classList.remove(selectedClassName);
          }
        }
      });
    };

    if (pathname === "/") {
      updateLinkSelection(homeNavLink.current);
    } else if (pathname === "/about") {
      updateLinkSelection(aboutNavLink.current);
    } else {
      updateLinkSelection(null);
    }
  }, [pathname]);

  return (
    <nav className="nav">
      <Link className="nav__link" to="/" ref={homeNavLink}>
        accueil
      </Link>
      <Link className="nav__link" to="/about" ref={aboutNavLink}>
        à propos
      </Link>
    </nav>
  );
}
