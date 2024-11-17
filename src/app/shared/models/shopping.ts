import {Product} from "./Product";

export interface Shopping {
  icon: string;
  title: string;
  type: boolean;
  period: string;
  status: boolean;
  products: Product[];
  description: string;
  dateComplete?: Date;
}
