import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

import { useGetLodging } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";
import Gallery from "../../components/gallery/Gallery";
import Dropdown from "../../components/dropdown/Dropdown";
import LodgingHeader from "../../components/lodging/LodgingHeader";

export default function Lodging() {
  const { id } = useParams();
  const { data, isLoading } = useGetLodging(id || "");

  useEffect(() => {
    document.title = data?.title || "Titre de la location";
  }, [data]);

  const hostName = useMemo(() => {
    if (data) {
      const nameArray = data.host.name.split(" ");
      if (nameArray.length) {
        return { firstName: nameArray[0], lastName: nameArray[1] };
      }
    }
    return null;
  }, [data]);

  if (isLoading || !data) {
    return (
      <main className="lodging">
        <Loader />;
      </main>
    );
  }

  return (
    <main className="lodging">
      <Gallery pictures={data.pictures} />
      <section className="lodging__container">
        <LodgingHeader data={data} hostName={hostName} />
        <div className="lodging__body">
          <div className="lodging__body__dropdown-wrapper">
            <Dropdown title={"Description"} content={data.description} />
          </div>
          <div className="lodging__body__dropdown-wrapper">
            <Dropdown title={"Équipements"} content={data.equipments} />
          </div>
        </div>
      </section>
    </main>
  );
}
