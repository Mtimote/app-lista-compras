import {Product} from "../shared/models/Product";
import {Shopping} from "../shared/models/shopping";

export const iconsShopping: string[] = [
  "bike.png", "book.png", "car.png", "car-shopping.png", "cat.png",
  "cooking.png", "dog-happy.png", "dog-kennel.png", "hospital.png",
  "leash.png", "pet-bowl.png", "plane.png", "toilet.png", "toys.png",
  "wine.png", "credit.png", "mercado.png"
];


export function defaultShoppingList(): Shopping[] {
  return [{
    type: true,
    status: false,
    icon: "dog-happy.png",
    period: "todos los dias",
    title: "Cosas para drako",
    description: "No olvides preparar la comida de Drako con carne magra, verduras cocidas y arroz integral",
    products: [getProductByIndex(0), getProductByIndex(1), getProductByIndex(2), getProductByIndex(3)]
  }, {
    type: true,
    status: false,
    icon: "book.png",
    period: "Una sola vez",
    title: "Proyecto de grado",
    description: "Recuerda que esto es muy importante",
    products: [getProductByIndex(4)]
  }, {
    type: false,
    status: false,
    icon: "plane.png",
    period: "Fin de semana",
    title: "Viaje a cartagena",
    description: "Visitaré la Ciudad Amurallada, el Castillo de San Felipe y las playas de Bocagrande y Playa Blanca. Disfrutaré de la comida local y la vida nocturna vibrante.",
    products: []
  }];
}

export function getProductByIndex(index: number) {
  return defaultDataProducts[index];
}

export const defaultDataProducts: Product[] = [{
  img: "pet-bowl.png",
  count: 3,
  title: "3 libras de comida",
  status: true,
  price: 25000
}, {
  img: "toys.png",
  count: 2,
  title: "Hueso de juguete",
  status: false
}, {
  img: "leash.png",
  count: 1,
  title: "Pasear por el parque",
  status: false
}, {
  img: "dog-kennel.png",
  count: 0,
  title: "Reparar casa de drako",
  status: false
}, {
  img: "credit.png",
  count: 5,
  title: "Comprar libros",
  status: false
}];

