import Footer from "@csl/Footer";
import Navbar from "@csl/Navbar";
import { BaseLayoutProp } from "@libs/commons/utils/type";
import { NextPage } from "next";
import Head from "next/head";

const BaseLayout: NextPage<BaseLayoutProp> = ({
  title,
  children,
  useNavbar,
}) => {
  return (
    <>
      <Head>
        <title>{title || "..."} | Pick Your Pic</title>
      </Head>
      {useNavbar ?? <Navbar />}
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
