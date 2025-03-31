import { Plant } from "@/models/Plant";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

interface Props {
  plant: Plant;
}

export const PlantCardDetails = ({ plant }: Props) => {
  return (
    <Card className="w-full sm:w-fit">
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <img
            src={plant?.imgUrl}
            title={plant?.name}
            alt={plant?.name}
            className="rounded-2xl w-full sm:w-[400px] h-[300px] object-cover"
          />
          <div className="flex flex-col gap-y-2">
            <div>
              <CardTitle title={plant?.name} className="text-2xl">
                {plant?.name}
              </CardTitle>
              <CardDescription title={plant?.binomialName}>
                {plant?.binomialName}
              </CardDescription>
            </div>
            <p className="text-xl font-semibold">€{plant?.price.toFixed(2)}</p>
            <div>
              <p>
                <span className="font-bold">Riegos por semana:</span>{" "}
                {plant?.wateringsPerWeek}
              </p>
              <p>
                <span className="font-bold">Tipo de fertilizante:</span>{" "}
                {plant?.fertilizerType}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
