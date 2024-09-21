import { LodgingProps } from "../../utils/hooks/api/lodgings";
import StarRating from "../starRating/StarRating";
import Tag from "../tag/Tag";

type Props = {
  data: LodgingProps;
  hostName: {
    firstName: string;
    lastName: string;
  } | null;
};

export default function LodgingHeader({ data, hostName }: Props) {
  const HostName: React.FC = () =>
    hostName ? (
      <p className="lodging__header__informations__host__name">
        <span>{hostName.firstName}</span>
        <br />
        <span>{hostName.lastName}</span>
      </p>
    ) : (
      <p className="lodging__header__informations__host__name">
        data.host.name
      </p>
    );

  return (
    <div className="lodging__header">
      <div className="lodging__header__presentation">
        <p className="lodging__header__presentation__title">{data.title}</p>
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
            <HostName />
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
              isActive={parseInt(data.rating) >= index + 1}
              key={"star-" + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
