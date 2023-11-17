import Image from "next/image";
import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-black/10 p-3 text-center rounded-lg shadow-xl border-2 border-gray-400">
      <Image
        src="/pizza.png"
        alt="pizza"
        width={150}
        height={150}
        className="mx-auto"
      />
      <h2 className="text-white font-semibold text-xl my-3">
        Peopperini Pizza
      </h2>
      <p className="text-gray-200 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
        dolor.
      </p>
      <button className="bg-primary font-semibold px-4 py-2 text-white rounded-full my-3">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
