"use client";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import { clearCart } from "../../store/cart-redux";

import CartItem from "./CartItem";

function Cart() {
  const cart = useAppSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const showCart = cart.items.length > 0;

  const router = useRouter();

  function handleOrder() {
    console.log("Placing Order.... for $", cart.totalPrice);
    dispatch(clearCart());
    handleBack();
  }

  function handleBack() {
    router.push("/pizza");
  }

  return (
    <div className="mx-2 mt-12 flex max-w-2xl flex-col border border-orange-800 text-orange-800 sm:mx-auto ">
      <h3 className="h-12  text-center text-xl">My Cart</h3>
      {!showCart && (
        <p className="bg-orange-300 text-center text-xl">
          There is no item cart yet.
        </p>
      )}
      {showCart && (
        <ul className=" border-b border-orange-800 bg-orange-300 ">
          {cart.items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
      )}
      {showCart && (
        <p className="pr-4 text-right text-2xl">
          <span>Total Price: </span>${cart.totalPrice}
        </p>
      )}
      <div className="flex h-12 items-center justify-center gap-4  py-4">
        <button
          onClick={handleBack}
          className="w-20  border border-orange-800 px-4 py-1 duration-200 hover:bg-orange-300"
        >
          Cancel
        </button>
        {showCart && (
          <button
            className="w-20 border border-orange-800 px-4 py-1 duration-200 hover:bg-orange-300"
            onClick={handleOrder}
          >
            Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
