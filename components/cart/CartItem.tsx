import Image from "next/image";

import { addItem, removeItem } from "../../store/cart-redux";
import { useDispatch } from "react-redux";

interface ItemType {
  id: string;
  image: string;
  name: string;
  amount: number;
  price: number;
}

function CartItem({ item }: { item: ItemType }) {
  const dispatch = useDispatch();

  function handleDecrementItem(id: string) {
    dispatch(removeItem(id));
  }

  function handleIncrementItem(item: ItemType) {
    dispatch(addItem(item));
  }
  return (
    <li className=" flex items-center justify-between border-t border-orange-800 py-1 sm:py-0 sm:pr-4 ">
      <Image
        src={item.image}
        alt=""
        width={64}
        height={64}
        className="hidden sm:block"
      />{" "}
      <div className="flex gap-2">
        <p>{item.name}</p>
      </div>
      <div className="flex items-center justify-between text-xl">
        <button
          onClick={() => handleDecrementItem(item.id)}
          className="w-8 border border-orange-800 bg-slate-100 px-2 hover:bg-orange-200"
        >
          -
        </button>
        <p className="w-8 text-center">{item.amount}</p>
        <button
          onClick={() => handleIncrementItem(item)}
          className="w-8 border border-orange-800 bg-slate-100 px-2 hover:bg-orange-200"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
