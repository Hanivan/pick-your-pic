import { UnsplashReponse } from "@libs/commons/payloads/unsplash.response";
import { MouseEventHandler } from "react";
import { UrlObject } from "url";

export type ChangeEventHTMLInput = React.ChangeEvent<HTMLInputElement>;

export type FormHTMLEvent = React.FormEvent<HTMLFormElement>;

export interface CardImageProp {
  image: UnsplashReponse;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
}

export interface CardModalProp {
  image: UnsplashReponse[];
  index: number;
  visible: boolean;
  isState?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
}

declare type Url = string | UrlObject;
export interface PropLink extends React.PropsWithChildren<{}> {
  href: Url;
  rel?: string;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  id?: string;
}

export interface BaseLayoutProp extends React.PropsWithChildren<{}> {
  title?: string;
  useNavbar?: boolean;
}
