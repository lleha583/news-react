
import NewLIst from "~/components/NewsLIst/NewsLIst";
import { Suspense, useEffect, useState } from "react";
import { Route } from "../+types/root";
import dotenv from 'dotenv'

dotenv.config()

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const getNews = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`, {
      method: "GET"
  })
  
  const newsData = getNews.json()

  return newsData
}

export default function Home({ loaderData }: Route.ComponentProps) {

  const [news, setNews] = useState(loaderData)

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Main page</h1>
        <div className="my-10">
          <NewLIst news={news} />
        </div>
    </>
  );
}
