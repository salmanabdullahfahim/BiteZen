import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="flex justify-around items-center">
      <div>
        <h1 className="text-4xl text-white font-semibold">
          Everything is better with a pizza
        </h1>
        <p className="my-4 text-gray-400">
          pizza is the missing place that makes everyday complete, a simple yet
          delicious joy in life
        </p>

        <div className="flex items-center gap-x-3">
          <button className="bg-primary flex gap-x-2 items-center text-white px-4 py-2 rounded-full ">
            Order now
            <FaArrowRight />
          </button>
          <button className="text-white">Learn more!</button>
        </div>
      </div>

      <div className="">
        <Image src={"/pizza.png"} alt="pizza" width={350} height={300} />
      </div>
    </section>
  );
}
