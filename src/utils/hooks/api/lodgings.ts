import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type LodgingProps = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: "1" | "2" | "3" | "4" | "5";
  location: string;
  equipments: string[];
  tags: string[];
};

export function useGetLodgings(lodgingId?: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<LodgingProps | LodgingProps[]>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("data/lodgings.json");
        if (!response.ok) throw new Error("Failed to fetch lodgings data");

        const lodgings: LodgingProps[] = await response.json();

        const selectedLodging = lodgingId
          ? lodgings.find(({ id }) => id === lodgingId)
          : lodgings;

        if (!selectedLodging) throw new Error("Lodging not found");

        setData(selectedLodging);
      } catch (error) {
        console.error(error);
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [navigate, lodgingId]);

  return { data, isLoading };
}
