import axiosInstance from "@/lib/axios";
import { Plant } from "@/models/Plant";

export async function getPlantById(id: Plant["id"]) {
  const resp = await axiosInstance.get<Plant>(`/api/v1/product/${id}`);
  return resp.data;
}
