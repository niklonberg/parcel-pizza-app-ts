import Pizza from "./models/Pizza";

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  console.log(pizzas);
});

document.addEventListener("DOMContentLoaded", async () => {
  const selectedPizza = await Pizza.loadOne(1);

  console.log(selectedPizza);
});
