import homeBanner from "../../assets/homeBanner.png";
import aboutBanner from "../../assets/aboutBanner.png";

type Props = {
  pathname: "about" | "home";
};

export default function Banner({ pathname }: Props) {
  return (
    <div className="banner">
      <img
        alt="banner"
        className="banner__image"
        src={pathname === "home" ? homeBanner : aboutBanner}
      />
      {pathname === "home" && (
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
}
