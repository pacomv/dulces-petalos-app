import { Plant } from "@/models/Plant";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Status } from "@/api/dtos/PlantDto";
import { getPlantStatusLabel } from "@/lib/getPlantStatusLabel";

interface Props {
  plant: Plant;
}

export const PlantCard = ({ plant }: Props) => {
  const navigate = useNavigate();

  const statusLabel = getPlantStatusLabel(plant?.status);

  return (
    <div className="flex">
      <Card
        className="hover:shadow-lg transform transition-transform duration-300 hover:scale-101 cursor-pointer"
        onClick={() => {
          if (document.startViewTransition) {
            document.startViewTransition(() => {
              navigate(`/${plant?.id}`);
            });
          } else {
            navigate(`/${plant?.id}`);
          }
        }}
        style={{ viewTransitionName: `plant-card-${plant?.id}` }}
      >
        <CardHeader>
          <CardTitle title={plant?.name} className="text-2xl">
            {plant?.name}
          </CardTitle>
          <CardDescription title={plant?.binomialName}>
            {plant?.binomialName ?? plant?.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="inline-block relative">
            <img
              src={plant?.imgUrl}
              title={plant?.name}
              alt={plant?.name}
              loading="lazy"
              className="rounded-2xl min-w-[350px] w-[350px] h-[300px] object-cover"
            />
            {plant.status === Status.NEW && (
              <div
                title={""}
                className="absolute top-2 right-2 bg-primary px-3 py-1 rounded-2xl shadow-sm"
              >
                {statusLabel}
              </div>
            )}
            <div
              title={`€${plant?.price.toFixed(2)}`}
              className="absolute bottom-2 left-2 bg-primary px-3 py-1 rounded-2xl shadow-sm"
            >
              €{plant?.price.toFixed(2)}
            </div>
            <Link
              title={`Ir a ${plant?.name}`}
              to={`${plant?.id}`}
              className="group absolute bottom-2 cursor-pointer right-2 bg-primary p-2 rounded-2xl shadow-sm transition-transform transform hover:scale-105"
            >
              <ArrowUpRight
                size="16px"
                className="transform transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
