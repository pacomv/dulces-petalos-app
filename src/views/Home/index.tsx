import { useQuery } from "@tanstack/react-query";
import { getPlants } from "@/api/getPlants";
import { PlantCard } from "@/components/PlantCard";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import { Plant } from "@/models/Plant";
import { useDebounce } from "@/hooks/useDebounce";

export const Home = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);
  const query = useQuery({
    queryKey: ["plants"],
    queryFn: getPlants,
    staleTime: 5 * 60 * 1000,
  });
  const data = useMemo(() => {
    return query?.data ?? [];
  }, [query?.data]);

  useEffect(() => {
    const trimmedInput = debouncedInput.trim().toLowerCase();
    const filteredPlants = data?.filter((plant) => {
      if (!trimmedInput) return true;

      const plantName = plant?.name?.toLowerCase() || "";
      const plantBinomialName = plant?.binomialName?.toLowerCase() || "";

      return (
        plantName.includes(trimmedInput) ||
        plantBinomialName.includes(trimmedInput)
      );
    });

    setPlants(filteredPlants);
  }, [data, debouncedInput]);

  return (
    <div className="flex flex-col space-y-6 items-center h-full">
      <div>
        <Input
          className="bg-primary w-[380px]"
          placeholder="Buscar en nuestra tienda"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
      {query?.isSuccess && plants.length > 0 && (
        <ul className="flex flex-wrap justify-center justify-items-start gap-6">
          {plants?.map((plant) => (
            <li key={plant?.id}>
              <PlantCard plant={plant} />
            </li>
          ))}
        </ul>
      )}
      {query?.isSuccess && !plants.length && (
        <div className="flex flex-col justify-center">
          <p className="text-xl">No hay resultados</p>
        </div>
      )}
    </div>
  );
};
