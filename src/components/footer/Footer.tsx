import darkLogo from "../../assets/darkLogo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img
          alt="Kasa dark logo"
          className="footer__wrapper__logo"
          src={darkLogo}
        />
        <p className="footer__wrapper__disclaimer">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
