import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Navbar from "@csl/Navbar";

const Banner: NextPage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${inputValue}`);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-[500px] flex items-center justify-center bg-banner bg-no-repeat bg-cover bg-bottom">
        <div className="md:w-1/3 w-72">
          <h2 className="text-xl md:text-2xl font-semibold mb-5 text-slate-100 drop-shadow-xl">
            Ayo cari gambar impian-mu. Mumpung lagi gratis, gampang, & bagus
            tentunya.
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
