import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto mt-24 max-w-lg text-center text-orange-800">
      <h2 className="pb-4 text-xl">Not Found</h2>
      <p className="text-md pb-4 italic">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
