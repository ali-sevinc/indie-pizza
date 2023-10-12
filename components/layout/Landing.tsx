import Link from "next/link";

function Landing() {
  return (
    <section className=" flex flex-col items-center pt-12 text-center text-orange-800">
      <h2 className="pb-6 text-3xl">Welcome to my Indie Pizza web site</h2>
      <h3 className="pb-6">
        All our pizzas are our own recipe and homemade by ourselves
      </h3>
      <Link
        href="/pizza"
        className="relative  block w-44 overflow-hidden border border-orange-800 px-6 py-2 duration-200 before:absolute before:left-[-100%] before:top-0 before:z-0 before:h-full before:w-full before:bg-orange-300 before:duration-200 before:content-[''] hover:before:left-0  "
      >
        <span className="relative z-10">Search Pizzas</span>
      </Link>
    </section>
  );
}

export default Landing;
