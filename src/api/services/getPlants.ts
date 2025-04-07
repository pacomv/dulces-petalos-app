import axiosInstance from "@/lib/axios";
import { PlantDto } from "../dtos/PlantDto";
import { getPlantsFromPlantDto } from "../adapters/getPlants";

export async function getPlants() {
  const resp = await axiosInstance.get<PlantDto[]>("/api/v2/product");
  const plants = getPlantsFromPlantDto(resp.data);
  return plants;
}
