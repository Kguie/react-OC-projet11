import Banner from "../../components/banner/Banner";
import LodgingThumbnail from "../../components/lodgingThumbnail/lodgingThumbnail";
import { useGetLodgings } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";

export default function Home() {
  const { data, isLoading } = useGetLodgings();

  const isDataArray = data && Array.isArray(data);

  return (
    <main className="home">
      <div className="home__container">
        <Banner pathname={"home"} />
        {isLoading ? (
          <Loader />
        ) : (
          <section className="home__container__cards-wrapper">
            {isDataArray &&
              data.map(({ id, cover, title }) => (
                <LodgingThumbnail
                  id={id}
                  cover={cover}
                  title={title}
                  key={"lodging-thumbnail-" + id}
                />
              ))}
          </section>
        )}
      </div>
    </main>
  );
}
