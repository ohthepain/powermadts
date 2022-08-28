import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import "tailwindcss/tailwind.css"

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="text-2xl">Halo</div>
  )
};

export default Home;
