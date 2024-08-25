import { useNavigate } from "react-router-dom";

import { LodgingProps } from "../../utils/hooks/api/lodgings";

type Props = {
  id: LodgingProps["id"];
  cover: LodgingProps["cover"];
  title: LodgingProps["title"];
};

export default function LodgingThumbnail({ id, cover, title }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/lodging/${id}`);
  }
  return (
    <div onClick={handleClick} className="lodging-thumbnail">
      <img
        alt={"Photo de couverture du logement " + id}
        src={cover}
        className="lodging-thumbnail__cover"
      />
      <p className="lodging-thumbnail__title">{title}</p>
    </div>
  );
}
