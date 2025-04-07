import { Status } from "@/api/dtos/PlantDto";

export function getPlantStatusLabel(status: Status) {
  switch (status) {
    case Status.NEW:
      return "Nuevo";
    default:
      return status;
  }
}
