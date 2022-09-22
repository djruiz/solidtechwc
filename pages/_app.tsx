import type { AppProps } from "next/app";
import "../styles/bootstrap.min.css";
import "../styles/global.css";
import { useUnderConstruction } from "../hooks/useUnderConstruction";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { showSite, underConstructionMessage } = useUnderConstruction();
  if (!showSite) return underConstructionMessage;

  return <Component {...pageProps} />;
}
