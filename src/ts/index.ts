import Pizza from "./models/Pizza";

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  console.log(pizzas);
});
