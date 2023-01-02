import CardImage from "@csl/Card-Image";
import CardModal from "@csl/Card-Modal";
import Footer from "@csl/Footer";
import Navbar from "@csl/Navbar";
import { DEFKEY } from "@libs/commons/constant";
import { UnsplashReponse } from "@libs/commons/payloads/unsplash.response";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchImage: NextPage = () => {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [fromState, setFromState] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const { query, push } = useRouter();
  const normalizeUrl = new URL(
    `${DEFKEY.BASEURL_API}/search/photos/?query=${query.keyword}&per_page=15&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
  );

  useEffect(() => {
    setLoading(true);
    fetch(normalizeUrl)
      .then((res) => res.json())
      .then((data) => setImages(data.results));
    setLoading(false);
  }, [query]);

  const handlePopUp = (id: string) => {
    const i = images.findIndex((image: UnsplashReponse) => image.id === id);
    setImageIndex((temp) => (temp = i));
    setShowPopUp(true);
    setFromState(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/search/${inputValue}`);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Navbar />
      <section className="container-responsive pt-24">
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
        <h1 className="text-xl mb-2">
          You Search:{" "}
          <span className="font-semibold">
            {String(query.keyword)
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")}
          </span>
        </h1>
        <div className="columns-3 gap-3 mx-auto space-y-3">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : images.length > 0 ? (
            images.map((image: UnsplashReponse) => (
              <CardImage
                key={image.id}
                image={image}
                onClick={() => handlePopUp(image.id)}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </section>
      {images.length > 0 ? (
        <CardModal
          image={images as UnsplashReponse[]}
          index={imageIndex}
          visible={showPopUp}
          isState={fromState}
          onClick={() => {
            setShowPopUp((showPopUp) => !showPopUp);
          }}
        />
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default SearchImage;
