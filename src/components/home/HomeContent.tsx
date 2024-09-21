import { LodgingProps } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";
import LodgingThumbnail from "../lodgingThumbnail/LodgingThumbnail";

type Props = {
  data?: LodgingProps[];
  isLoading: boolean;
};

export default function HomeContent({ data, isLoading }: Props) {
  if (!data || isLoading) {
    return <Loader />;
  }
  return (
    <section className="home__container__cards-wrapper">
      {data.map(({ id, cover, title }) => (
        <LodgingThumbnail
          id={id}
          cover={cover}
          title={title}
          key={"lodging-thumbnail-" + id}
        />
      ))}
    </section>
  );
}
