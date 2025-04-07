import { Plant } from "@/models/Plant";
import { PlantDto } from "../dtos/PlantDto";

export function getPlantFromPlantDto(plantDto: PlantDto) {
  const plant: Plant = {
    id: plantDto.id,
    name: plantDto.name,
    binomialName: plantDto.binomial_name,
    price: plantDto.price,
    imgUrl: plantDto.image_url,
    wateringsPerWeek: plantDto.week_waterings,
    fertilizerType: plantDto.fertilizer_type,
    heightInCm: plantDto.height_cm,
    status: plantDto.status,
  };
  return plant;
}

export function getPlantsFromPlantDto(plantsDto: PlantDto[]) {
  const plants: Plant[] = plantsDto.map((plantDto) =>
    getPlantFromPlantDto(plantDto)
  );
  return plants;
}
