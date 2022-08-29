import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import "tailwindcss/tailwind.css"

const Home: NextPage = () => {
  const data = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  if (data.isLoading) {
    return <div>Loading ...</div>
  }

  if (data.data == null) {
    return <div>No data!</div>
  }

  console.log(JSON.stringify(data.data.greeting))

  return (<div className="h-screen w-screen flex flex-col justify-center items-center">
    <div className="text-2xl text-center">First</div>
    <div className="border-rounded-p8 flex justify-between max-w-2xl">
      <div className="w-16 h-16 bg-red-200"></div>
      <div className="p-8">vs</div>
      <div className="w-16 h-16 bg-red-500">{data.data.greeting}</div>
    </div>
  </div>)
}

export default Home;
