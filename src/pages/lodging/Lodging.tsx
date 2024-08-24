import { useParams } from "react-router-dom";
import { useGetLodgings } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";

export default function Lodging() {
  const { id } = useParams();
  const { data, isLoading } = useGetLodgings(id);

  return (
    <div className="lodging">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="lodging__container">
          <p>Lodging</p>
        </div>
      )}
    </div>
  );
}
