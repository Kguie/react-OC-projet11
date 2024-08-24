import Banner from "../../components/banner/Banner";
import { useGetLodgings } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";

export default function Home() {
  const { data, isLoading } = useGetLodgings();

  return (
    <div className="home">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home__container">
          <Banner pathname={"home"} />
        </div>
      )}
    </div>
  );
}
