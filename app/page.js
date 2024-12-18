import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <section>
          <Image loading="lazy" src={"/bg-image.jpeg"} alt="background image" width={1900} className="h-[900px] absolute -z-10" height={900} />
        </section>
        <section className="text-center py-20 text-white">
          <article>
            <h1 className="text-5xl font-bold">The best food for your taste!</h1>
            <br />
            <p className="text-xl">Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary heaven . </p>
          </article>
          <article className="text-center">
            <Link href={"/createorder"}><button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Book a table</button></Link>
            <Link href={"/menu"}><button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore Menu</button></Link>
          </article>
        </section>
      </div>
    </main>
  );
}