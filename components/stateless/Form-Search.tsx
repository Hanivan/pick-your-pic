import { ChangeEventHTMLInput, FormHTMLEvent } from "@libs/commons/utils/type";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const FormSearch: NextPage = () => {
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
  );
};

export default FormSearch;
