"use client";

import Image from "next/image";

import { useDispatch } from "react-redux";
import { AppDispath } from "@/store/store";
import { addItem } from "@/store/cart-redux";

import { Pizza } from "./PizzaList";

function PizzaItem({ pizza }: { pizza: Pizza }) {
  const dispatch = useDispatch<AppDispath>();

  function handleAddItem() {
    const item = {
      image: pizza.image,
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      amount: 1,
    };
    dispatch(addItem(item));
  }

  const soldOut = pizza.soldOut;
  return (
    <li className="relative flex max-w-md flex-col bg-orange-300  text-orange-800 shadow-sm lg:flex-row">
      <Image
        src={pizza.image}
        alt={pizza.name}
        width={240}
        height={240}
        className={`${
          soldOut ? "grayscale" : ""
        } w-full lg:h-[240px] lg:w-[240px]`}
      />
      <div className="flex min-h-[8rem] w-full flex-col justify-between pl-2 pt-2 lg:h-auto">
        <div>
          <p className="text-xl">{pizza.name}</p>
          <p className="italic">{pizza.ingredients}</p>
        </div>
        <p
          className={` flex  w-[90%] justify-around text-xl lg:justify-between  ${
            soldOut ? "text-slate-500" : "text-green-500"
          } `}
        >
          <span>{soldOut ? "Soldout" : "Available"}</span>{" "}
          <span> ${pizza.price}</span>
        </p>
      </div>
      <button
        onClick={handleAddItem}
        disabled={soldOut}
        className={`absolute  px-3 py-1 duration-200  disabled:cursor-not-allowed lg:bottom-0 lg:left-0 ${
          soldOut
            ? "bg-slate-500 text-slate-100"
            : "bg-orange-300 hover:bg-orange-500 hover:text-orange-900"
        } `}
      >
        Add
      </button>
    </li>
  );
}

export default PizzaItem;
