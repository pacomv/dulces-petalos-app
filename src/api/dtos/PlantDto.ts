export enum FertilizerType {
  PHOSPHORUS = "phosphorus",
  NITROGEN = "nitrogen",
}

export enum Status {
  NEW = "new",
  COMING_SOON = "coming_soon",
  DEFAULT = "default",
  OUT_OF_STACK = "out_of_stock",
}
export interface PlantDto {
  id: string;
  name: string;
  binomial_name: string;
  price: number;
  image_url: string;
  week_waterings: number;
  fertilizer_type: FertilizerType;
  height_cm: number;
  status: Status; // puedes ajustar los posibles estados según el dominio
}
