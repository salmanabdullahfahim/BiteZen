import React from "react";
import MenuItem from "./MenuItem";

const HomeMenu = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="uppercase font-semibold text-gray-100">check out</h3>
        <h2 className="text-primary text-4xl italic font-bold pb-3">Menu</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
