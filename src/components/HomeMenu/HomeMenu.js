import React from "react";
import MenuItem from "./MenuItem";
import Header from "@/utils/Header";

const HomeMenu = () => {
  return (
    <section>
      <div>
        <Header subHeader="check out" mainHeader="Menu" />
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
