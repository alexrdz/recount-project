import { ProvideUser } from "../contexts/userContext";
import "../styles/styles.css";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideUser>
      <main className="mx-auto bg-gray-100 min-h-screen">
        <Header />
        <Component {...pageProps} />
      </main>
    </ProvideUser>
  );
}

export default MyApp;
