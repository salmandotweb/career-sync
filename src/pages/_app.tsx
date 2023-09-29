import { store } from "@/stores/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { Montserrat } from "@next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Montserrat({
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	let persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<main className={font.className}>
						<Component {...pageProps} />
					</main>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
