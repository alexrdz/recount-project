import Head from "next/head";
import { useUserContext } from "../contexts/userContext";
import Header from "./components/Header";
import Person from "./components/Person";

export default function Home() {
  const { userData } = useUserContext();

  if (!userData) {
    return <div>loading data...</div>;
  }

  return (
    <div className="">
      <Head>
        <title>Recount Family Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl px-8 md:px-4 mx-auto mt-24 md:mt-32">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {userData.map((p) => (
            <Person key={p.id} person={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
