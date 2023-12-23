import Pizza, { PizzaProperties } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;

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

function renderTemplates(templates: string[], parentElement: Element): void {
  const templateElement = document.createElement("template");

  templates.forEach((template) => {
    templateElement.innerHTML += template;
  });

  parentElement.appendChild(templateElement.content);
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  const pizzaTemplates = pizzas.map((pizza) => createPizzaTemplate(pizza));

  renderTemplates(pizzaTemplates, rootElement);
  console.log(pizzas);
});
