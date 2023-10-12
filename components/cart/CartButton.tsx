"use client";

import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";

function CartButton() {
  const router = useRouter();
  const items = useAppSelector((state) => state.cartReducer.items);
  const itemNum = items.reduce((acc, item) => acc + item.amount, 0);

  function handleRoute() {
    router.push("/cart");
  }

  return (
    <button
      onClick={handleRoute}
      className="relative flex items-center gap-2 overflow-hidden border border-orange-700 px-5 py-2 text-orange-700 before:absolute before:-left-full  before:top-0 before:z-0 before:h-full before:w-full before:bg-orange-400 before:duration-200 before:content-['']   hover:before:left-0"
    >
      <span className=" z-10">🛒</span>
      <span className="z-10 text-xl">Cart</span>
      <span className="z-10 text-xl ">{itemNum}</span>
    </button>
  );
}

export default CartButton;
