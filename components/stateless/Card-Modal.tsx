import { UnsplashReponse } from "@libs/commons/payloads/unsplash.response";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";

const CardModal: NextPage<{
  image: UnsplashReponse[];
  index: number;
  visible: boolean;
  isState?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
}> = ({ image, index, visible, onClick, isState }) => {
  const [currIndex, setCurrentIndex] = useState(index);
  const [fromState, setFromState] = useState(true);
  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const handleNextImage = () => {
    setFromState(false);
    if (!isState) setFromState(true);
    if (currIndex > image.length - 2) {
      setCurrentIndex(0);
    } else {
      console.log("ok");
      setCurrentIndex((index = currIndex + 1));
    }
  };
  const handlePrevImage = () => {
    setFromState(false);
    if (!isState) setFromState(true);
    if (currIndex === 0) {
      setCurrentIndex(image.length - 1);
    } else {
      setCurrentIndex((index = currIndex - 1));
    }
  };

  if (!image || !visible) return null;

  return visible ? (
    <div className="fixed inset-0 bg-slate-900/30 flex justify-center items-center">
      <div
        className="top-0 right-0 px-4 py-3 hover:cursor-pointer absolute"
        onClick={onClick}
      >
        X
      </div>
      <div className="w-full h-full flex justify-between items-center">
        <div
          className="hover:cursor-pointer ml-5 bg-orange-500 p-1 rounded text-slate-100 w-16 text-center hidden md:block"
          onClick={handlePrevImage}
        >
          Prev
        </div>
        <div>
          {currIndex > -1 ? (
            <figure className="overflow-hidden relative">
              <Image
                width={510}
                height={510}
                className="shadow-lg rounded"
                src={image[fromState ? index : currIndex].urls.full}
                alt={image[fromState ? index : currIndex].id}
              />
              <figcaption className="absolute bottom-0 w-full p-3 text-sm bg-slate-800/80 hover:bg-slate-800/800 rounded-tl-[80px] md:rounded-tl-full transition text-slate-100 drop-shadow-lg text-center flex md:flex-row flex-col items-center">
                <div className="grow">
                  <h5 className="font-bold text-xl">
                    {image[fromState ? index : currIndex].user.name}
                  </h5>
                  <p>
                    {image[fromState ? index : currIndex].description ||
                      image[fromState ? index : currIndex].alt_description}
                  </p>
                </div>
                <Link
                  rel="nofollow"
                  download=""
                  target="_blank"
                  className="mt-2 md:mt-0"
                  title="Download photo"
                  href={image[fromState ? index : currIndex].links.download}
                >
                  Download
                </Link>
              </figcaption>
            </figure>
          ) : (
            <></>
          )}
          <div className="flex md:hidden justify-between gap-2 mt-2">
            <div
              className="hover:cursor-pointer bg-orange-500 w-full text-center p-1 rounded text-slate-100"
              onClick={handlePrevImage}
            >
              Prev
            </div>
            <div
              className="hover:cursor-pointer bg-orange-500 w-full text-center p-1 rounded text-slate-100"
              onClick={handleNextImage}
            >
              Next
            </div>
          </div>
        </div>
        <div
          className="hover:cursor-pointer mr-5 bg-orange-500 p-1 rounded text-slate-100 w-16 text-center hidden md:block"
          onClick={handleNextImage}
        >
          Next
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CardModal;
