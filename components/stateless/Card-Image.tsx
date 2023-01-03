import { CardImageProp } from "@libs/commons/utils/type";
import { NextPage } from "next";
import Image from "next/image";

const CardImage: NextPage<CardImageProp> = ({ image, onClick }) => {
  return (
    <figure className="overflow-hidden relative">
      <Image
        src={image.urls.small}
        width={image.width}
        height={image.height}
        alt={image.id}
        title={image.description || image.alt_description}
        className="hover:scale-110 transition hover:shadow hover:cursor-zoom-in"
        onClick={onClick}
      />
      {/* <figcaption
        className="absolute bottom-0 w-full p-1 text-sm bg-slate-800/20 hover:bg-slate-800/30 transition text-slate-100 drop-shadow-lg"
        title={image.description || image.alt_description}
      >
        <h5>{image.user.username || image.user.name}</h5>
      </figcaption> */}
    </figure>
  );
};

export default CardImage;
