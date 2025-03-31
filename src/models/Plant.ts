export enum FertilizerType {
  PHOSPHORUS = "phosphorus",
  NITROGEN = "nitrogen",
}

export interface Plant {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: FertilizerType;
  heightInCm: number;
}
