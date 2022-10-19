import { Button } from "@/components";
import React from "react";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <section className="mx-auto">
      <div className="w-full">
        <p className="text-8xl font-bold text-left place-content-end">
          Por qué tener <br /> a
          <span className="text-gray-600 text-8xl font-bold">Certiblock</span>
          <Button text="SABER MÁS" type="ligth" className="px-20 mx-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </p>
      </div>
    </section>
  );
};

export default Home;
