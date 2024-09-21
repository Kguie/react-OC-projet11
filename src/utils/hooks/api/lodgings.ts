import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type LodgingProps = {
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

export function useGetAllLodgings() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<LodgingProps[]>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://localhost:3000/data/lodgings.json"
        );
        if (!response.ok) throw new Error("Failed to fetch lodgings data");

        const lodgings: LodgingProps[] = await response.json();

        setData(lodgings);
      } catch (error) {
        console.error(error);
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [navigate]);

  return { data, isLoading };
}

export function useGetLodging(lodgingId: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<LodgingProps>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (!lodgingId) throw new Error("Failed to fetch lodgings data");
        setIsLoading(true);
        const response = await fetch(
          "http://localhost:3000/data/lodgings.json"
        );
        if (!response.ok) throw new Error("Failed to fetch lodgings data");

        const lodgings: LodgingProps[] = await response.json();

        const selectedLodging = lodgings.find(({ id }) => id === lodgingId);

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
