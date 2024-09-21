import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

type Props = {
  pictures: Array<string>;
  changePicture: (direction: "previous" | "next") => void;
  pictureNumber: number;
};

export default function GalleryNavigation({
  pictures,
  pictureNumber,
  changePicture,
}: Props) {
  const isAvailable = pictures.length > 1;

  if (!isAvailable) {
    return null;
  }

  return (
    <span className="gallery__navigation">
      <img
        className="gallery__navigation__icon"
        src={arrowLeft}
        alt="Voir précédente"
        onClick={() => changePicture("previous")}
      />
      <span className="gallery__navigation__index">
        {`${pictureNumber + 1}/${pictures.length}`}
      </span>
      <img
        className="gallery__navigation__icon"
        src={arrowRight}
        alt="Voir suivante"
        onClick={() => changePicture("next")}
      />
    </span>
  );
}
