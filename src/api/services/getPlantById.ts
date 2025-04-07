import axiosInstance from "@/lib/axios";
import { Plant } from "@/models/Plant";
import { PlantDto } from "../dtos/PlantDto";
import { getPlantFromPlantDto } from "../adapters/getPlants";

export async function getPlantById(id: Plant["id"]) {
  const resp = await axiosInstance.get<PlantDto>(`/api/v2/product/${id}`);
  const plant = getPlantFromPlantDto(resp.data);
  return plant;
}
