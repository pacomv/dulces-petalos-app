import { getPlantById } from "@/api/services/getPlantById";
import { PlantCardDetails } from "@/components/PlantCardDetails";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Plant } from "@/models/Plant";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

interface Props {
  plant?: Plant;
}

export const PlantDetails = ({ plant }: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = (plant?.id ?? params?.pid) as string;
  const query = useQuery({
    queryKey: ["plant", id],
    queryFn: () => {
      return getPlantById(id);
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
  return (
    <div className="flex flex-col items-center space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{query?.data?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PlantCardDetails plant={query?.data as Plant} />
    </div>
  );
};
