import { useState } from "react";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

type Props = {
  pictures: Array<string>;
};

function Gallery({ pictures }: Props) {
  const [pictureNumber, setPictureNumber] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  function changePicture(direction: "previous" | "next") {
    if (transitioning) return;
    setTransitioning(true);

    setTimeout(() => {
      setPictureNumber((prev: number) =>
        direction === "next"
          ? (prev + 1) % pictures.length
          : (prev - 1 + pictures.length) % pictures.length
      );
      setTransitioning(false);
    }, 300);
  }

  return (
    <div className="gallery">
      {pictures.length > 1 && (
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
      )}

      <div className="gallery__pictures-wrapper">
        {pictures.map((picture, index) => (
          <img
            key={"gallery-picture-" + index}
            className={`gallery__pictures-wrapper__picture ${
              index === pictureNumber
                ? "gallery__pictures-wrapper__picture--current"
                : index ===
                  (pictureNumber - 1 + pictures.length) % pictures.length
                ? "gallery__pictures-wrapper__picture--previous"
                : index === (pictureNumber + 1) % pictures.length
                ? "gallery__pictures-wrapper__picture--next"
                : ""
            }`}
            src={picture}
            alt={`${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
