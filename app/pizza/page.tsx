import fs from "node:fs";
import path from "path";

import PizzaList from "@/components/pizza/PizzaList";

function PizzaPage() {
  const pizzas = getPizzas();
  return <PizzaList pizzas={pizzas} />;
}

export default PizzaPage;

function getPizzas() {
  const postsPath = path.join(process.cwd(), "content");
  const filePath = path.join(postsPath, "pizzas.json");
  const pizzasData = fs.readFileSync(filePath, "utf8");
  const pizzas = JSON.parse(pizzasData).pizzas;
  return pizzas;
}
