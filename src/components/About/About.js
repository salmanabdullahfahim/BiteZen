import Header from "@/utils/Header";
import React from "react";

const About = () => {
  return (
    <div className="my-8">
      <section>
        <Header subHeader={"our story"} mainHeader={"About Us"} />
      </section>

      <div className="mt-3">
        <p className="text-gray-200 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi
          officiis similique possimus provident harum laborum odit porro fugit
          esse vitae consequuntur, corrupti quae. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Aut temporibus facilis rerum culpa
          eveniet, molestiae facere ea debitis ullam delectus asperiores enim,
          vel eum accusantium voluptatem repellendus qui velit quaerat impedit
          in. Quasi perspiciatis temporibus consectetur labore soluta aut quas
          nostrum
        </p>
      </div>
    </div>
  );
};

export default About;
