import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ChangeEventHTMLInput, FormHTMLEvent } from "@libs/commons/utils/type";

const Banner: NextPage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormHTMLEvent) => {
    e.preventDefault();
    router.push(`/search/${inputValue}`);
  };
  const handleOnChange = (e: ChangeEventHTMLInput) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <section className="w-full h-[500px] flex items-center justify-center bg-banner bg-no-repeat bg-cover bg-bottom">
        <div className="md:w-1/3 w-72">
          <h2 className="text-xl md:text-2xl font-semibold mb-5 text-slate-100 drop-shadow-xl">
            Ayo cari gambar{" "}
            <span className="border-b-2 border-orange-500">impian</span>-mu.
            Mumpung lagi gratis, gampang, & bagus tentunya.
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search-pic"
              id="search-pic"
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-orange-300 focus:ring-orange-300 focus:ring-1 sm:text-sm"
              placeholder="Cari kucing hd..."
              onChange={handleOnChange}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Banner;
