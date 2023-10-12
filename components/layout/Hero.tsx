import Link from "next/link";
import CartButton from "../cart/CartButton";

function Hero() {
  return (
    <header className="flex h-32 items-center justify-around bg-orange-300">
      <Link href="/" className="text-5xl text-orange-800">
        Indie Pizza
      </Link>
      <CartButton />
    </header>
  );
}

export default Hero;
