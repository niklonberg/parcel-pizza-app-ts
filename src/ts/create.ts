import Pizza, { PizzaProperties } from "./models/Pizza";

const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProperties = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    toppings: data.getAll("toppings") as string[],
    price: parseInt(data.get("price") as string, 10),
  };

  const response = await Pizza.save(newPizza);

  if (!response.ok) {
    console.log("not able to save pizza");
  }

  if (response.ok) {
    window.location.href = "/";
  }
});
