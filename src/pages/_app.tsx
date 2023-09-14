import { store } from "@/stores/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { Syne } from "@next/font/google";

const syne = Syne({
  subsets: ["latin-ext"],
  variable: "--font-syne",
});

export default function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className={`${syne.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  );
}
