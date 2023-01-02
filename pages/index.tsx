import { NextPage } from "next";
import Banner from "@csf/Banner";
import { DEFKEY } from "@libs/commons/constant";
import { useEffect, useState } from "react";
import { UnsplashReponse } from "@libs/commons/payloads/unsplash.response";
import CardImage from "@csl/Card-Image";
import CardModal from "@csl/Card-Modal";
import Footer from "@csl/Footer";

const Welcome: NextPage = () => {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [fromState, setFromState] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${DEFKEY.BASEURL_API}/photos/?per_page=15&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setImages(data));
    setLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  const handlePopUp = (id: string) => {
    const i = images.findIndex((image: UnsplashReponse) => image.id === id);
    setImageIndex((temp) => (temp = i));
    setShowPopUp(true);
    setFromState(true);
  };

  return (
    <>
      <Banner />
      <section className="container-responsive mt-16">
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
            <h1>Image Empty</h1>
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

export default Welcome;
