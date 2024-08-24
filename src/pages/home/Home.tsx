import { useGetLodgings } from "../../utils/hooks/api/lodgings";
import Loader from "../../utils/loader";

export default function Home() {
  const { data, isLoading } = useGetLodgings();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>Home</p>
        </div>
      )}
    </div>
  );
}
