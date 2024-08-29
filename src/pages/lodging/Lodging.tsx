import { useParams } from "react-router-dom";

import { useGetLodgings } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";
import Gallery from "../../components/gallery/Gallery";
import { useEffect, useMemo } from "react";
import Tag from "../../components/tag/Tag";
import StarRating from "../../components/starRating/StarRating";
import Dropdown from "../../components/dropdown/Dropdown";

export default function Lodging() {
  const { id } = useParams();
  const { data, isLoading } = useGetLodgings(id);

  const lodgingIsNotArray = data && !Array.isArray(data);

  useEffect(() => {
    if (lodgingIsNotArray) {
      document.title = data.title || "Titre de la location";
    }
  }, [data, lodgingIsNotArray]);

  const hostName = useMemo(() => {
    if (lodgingIsNotArray) {
      const nameArray = data.host.name.split(" ");
      if (nameArray.length) {
        return { firstName: nameArray[0], lastName: nameArray[1] };
      }
    }
    return null;
  }, [data, lodgingIsNotArray]);

  return (
    <main className="lodging">
      {isLoading ? (
        <Loader />
      ) : lodgingIsNotArray ? (
        <>
          <Gallery pictures={data.pictures} />
          <section className="lodging__container">
            <div className="lodging__header">
              <div className="lodging__header__presentation">
                <p className="lodging__header__presentation__title">
                  {data.title}
                </p>
                <p className="lodging__header__presentation__location">
                  {data.location}
                </p>
                <div className="lodging__header__presentation__tags-wrapper">
                  {data.tags.map((label, index) => (
                    <Tag label={label} key={"tag-" + index} />
                  ))}
                </div>
              </div>
              <div className="lodging__header__informations">
                <div className="lodging__header__informations__host">
                  <p className="lodging__header__informations__host__name">
                    {hostName ? (
                      <>
                        <span>{hostName.firstName}</span>
                        <br />
                        <span>{hostName.lastName}</span>
                      </>
                    ) : (
                      data.host.name
                    )}
                  </p>
                  <div className="lodging__header__informations__host__profile">
                    <img
                      alt={data.host.name}
                      src={data.host.picture}
                      className="lodging__header__informations__host__profile__photo"
                    />
                  </div>
                </div>
                <div className="lodging__header__informations__rating-wrapper">
                  {[...Array(5)].map((_, index) => (
                    <StarRating
                      isActive={parseInt(data.rating) <= index + 1}
                      key={"star-" + index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lodging__body">
              <div className="lodging__body__dropdown-wrapper">
                <Dropdown title={"Description"} content={data.description} />
              </div>
              <div className="lodging__body__dropdown-wrapper">
                <Dropdown title={"Équipements"} content={data.equipments} />
              </div>
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
}
