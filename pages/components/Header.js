import Link from "next/link";
import { useUserContext } from "../../contexts/userContext";
import Waves from "./Waves";

export default function Header() {
  const { currentUser } = useUserContext();

  if (!currentUser) {
    return <div>loading your profile...</div>;
  }

  return (
    <div className="profile block w-full bg-gradient-to-r from-green-600 to-blue-500 h-full py-16 shadow-lg">
      <Waves />
      <div className="relative z-10">
        <img
          src="https://source.unsplash.com/300x300/?face"
          alt=""
          className="rounded-full block mx-auto h-32 w-32 border-white border-4 shadow-md my-6"
        />

        <h1 className="text-center text-white text-3xl font-thin">
          Welcome, {currentUser.name}!
        </h1>

        <nav className="mx-auto md:w-1/4 text-center mt-8">
          <Link href="/">
            <a className="text-gray-200 hover:text-white transition duration-500 ease-in-out">
              Home
            </a>
          </Link>{" "}
          <span className="px-4">/</span>
          <Link href="/about">
            <a className="text-gray-200 hover:text-white transition duration-500 ease-in-out">
              About
            </a>
          </Link>
        </nav>

        <Link href={`/edit/${currentUser.id}`}>
          <a className="block mx-auto cursor-pointer  w-52 mt-12 -mb-24 bg-white rounded-md py-4 px-10 shadow-md transition duration-500 ease-in-out transform-gpu hover:-translate-y-1">
            Edit your profile
          </a>
        </Link>
      </div>
    </div>
  );
}
