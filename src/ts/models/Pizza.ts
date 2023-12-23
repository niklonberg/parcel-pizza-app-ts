import DataResource from "../services/DataResource";

export interface PizzaProperties {
  title: string;
  description: string;
  toppings: string[];
  price: number;
}

const Pizza = new DataResource<PizzaProperties>("http://localhost:3000/pizzas");

export default Pizza;
