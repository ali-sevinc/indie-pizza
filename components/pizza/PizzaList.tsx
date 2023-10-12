import PizzaItem from "./PizzaItem";

export type Pizza = {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  soldOut: boolean;
};
interface PropsType {
  pizzas: Pizza[];
}
function PizzaList({ pizzas }: PropsType) {
  return (
    <ul className="mx-auto grid max-w-md grid-cols-1 gap-4 py-12 lg:max-w-4xl  lg:grid-cols-2 ">
      {pizzas.map((pizza) => (
        <PizzaItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default PizzaList;
