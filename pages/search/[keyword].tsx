import CardImage from "@csl/Card-Image";
import CardModal from "@csf/Card-Modal";
import { DEFKEY } from "@libs/commons/constant";
import { UnsplashReponse } from "@libs/commons/payloads/unsplash.response";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "@cly/BaseLayout";
import FormSearch from "@csl/Form-Search";

const SearchImage: NextPage = () => {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [fromState, setFromState] = useState(true);
  const { query } = useRouter();
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

  return (
    <BaseLayout title={query.keyword as string}>
      <section className="container-responsive pt-24">
        <FormSearch />
        <h1 className="text-xl mb-5 mt-2">
          You search:{" "}
          <span className="font-semibold capitalize">{query.keyword}</span>
        </h1>
        <div className="columns-2 md:columns-3 gap-3 mx-auto space-y-3">
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
            <h1>Image Empty...</h1>
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
    </BaseLayout>
  );
};

export default SearchImage;
