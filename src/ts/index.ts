import Pizza, { PizzaProperties } from "./models/Pizza";

function createPizzaTemplate(pizza: PizzaProperties): string {
  return `
  <div class="pizza">
    <h2>${pizza.title}</h2>
    <p class="toppings">${pizza.toppings.join(", ")}</p>
    <p>${pizza.description}</p>
    <span>$${pizza.price}</span>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  const pizzaTemplates = pizzas.map((pizza) => createPizzaTemplate(pizza));

  console.log(pizzas);
});
