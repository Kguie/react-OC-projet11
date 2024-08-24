import AppNav from "../appNav/AppNav";
import lightLogo from "../../assets/lightLogo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Kasa logo" src={lightLogo} />
      <AppNav />
    </header>
  );
}
