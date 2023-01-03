import { NextPage } from "next";
import FormSearch from "@csl/Form-Search";

const Banner: NextPage = () => {
  return (
    <>
      <section className="w-full h-[500px] flex items-center justify-center bg-banner bg-no-repeat bg-cover bg-bottom">
        <div className="md:w-1/3 w-72">
          <h2 className="text-xl md:text-2xl font-semibold mb-5 text-slate-100 drop-shadow-xl">
            Ayo cari gambar{" "}
            <span className="border-b-2 border-orange-500">impian</span>-mu.
            Mumpung lagi gratis, gampang, & bagus tentunya.
          </h2>
          <FormSearch />
        </div>
      </section>
    </>
  );
};

export default Banner;
