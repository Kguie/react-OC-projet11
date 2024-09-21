import { useEffect } from "react";

import Banner from "../../components/banner/Banner";
import { useGetAllLodgings } from "../../utils/hooks/api/lodgings";
import HomeContent from "../../components/home/HomeContent";

export default function Home() {
  const { data, isLoading } = useGetAllLodgings();

  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <main className="home">
      <div className="home__container">
        <Banner pathname={"home"} />
        <HomeContent data={data} isLoading={isLoading} />
      </div>
    </main>
  );
}
