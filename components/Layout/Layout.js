import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/app/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <>
        <Head>
          <meta
            name="description"
            content="A Weather Application in NextJS and Tailwind CSS. Weather Application. Weather App."
          />
          <meta
            name="keywords"
            content="Weather Application Weather App. Weather App in NextJS Weather App using Next.js and Tailwind CSS."
          />
          <meta name="author" content="Erys Mozo | Eryscode7" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Weatheria</title>
        </Head>
        <div className="h-full w-full bg-[#121212]">{children}</div>
      </>
    </Provider>
  );
};

export default Layout;
