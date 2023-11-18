import Header from "@/utils/Header";
import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <section>
        <Header subHeader={"Don't Hesitate"} mainHeader={"Contact Us"} />
      </section>
      <div>
        <a className=" text-gray-200 underline text-3xl" href="tel:+467859959">
          +467859959
        </a>
      </div>
    </div>
  );
};

export default Contact;
