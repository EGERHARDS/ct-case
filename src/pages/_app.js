import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { BuyerProvider } from "@/context/BuyerContext";

export default function App({ Component, pageProps }) {
  return (
    <BuyerProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </BuyerProvider>
  );
}
