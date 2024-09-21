import homeBanner from "../../assets/homeBanner.png";
import aboutBanner from "../../assets/aboutBanner.png";

type Props = {
  pathname: "about" | "home";
};

export default function Banner({ pathname }: Props) {
  const BannerText: React.FC = () =>
    pathname === "home" ? (
      <p className="banner__text">Chez vous, partout et ailleurs</p>
    ) : null;

  return (
    <div className="banner">
      <img
        alt="banner"
        className="banner__image"
        src={pathname === "home" ? homeBanner : aboutBanner}
      />
      <BannerText />
    </div>
  );
}
