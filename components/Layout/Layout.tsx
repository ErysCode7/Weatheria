import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/app/store";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
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
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.js"
            defer
          ></script>
        </Head>
        <div>{children}</div>
      </>
    </Provider>
  );
};

export default Layout;
