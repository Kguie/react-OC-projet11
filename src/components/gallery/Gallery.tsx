import { useState } from "react";
import GalleryNavigation from "./GalleryNavigation";

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

  function getPictureClass(index: number): string {
    const totalPictures = pictures.length;

    if (index === pictureNumber) return "gallery__picture--current";
    if (index === (pictureNumber - 1 + totalPictures) % totalPictures)
      return "gallery__picture--previous";
    if (index === (pictureNumber + 1) % totalPictures)
      return "gallery__picture--next";
    return "";
  }

  return (
    <div className="gallery">
      <GalleryNavigation
        pictures={pictures}
        changePicture={changePicture}
        pictureNumber={pictureNumber}
      />
      <div className="gallery__pictures-wrapper">
        {pictures.map((picture, index) => (
          <img
            key={"gallery-picture-" + index}
            className={`gallery__picture ${getPictureClass(index)}`}
            src={picture}
            alt={`${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
