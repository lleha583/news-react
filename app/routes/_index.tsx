
import NewLIst from "~/components/NewsLIst/NewsLIst";
import { Suspense, useEffect, useState } from "react";
import { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const arr = [
    {
      name: 'qke',
      id: 4354,
      img: '../../public/wme-img-logo1.jpg',
      title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus explicabo provident sed ipsa nostrum, molestias, dolore reprehenderit odit, pariatur dolor aperiam culpa omnis possimus earum ea eveniet. Tempora, repudiandae!'
    },
    {
      name: 'mtyuie',
      id: 4354,
      img: '../../public/wme-img-logo1.jpg',
      title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus explicabo provident sed ipsa nostrum, molestias, dolore reprehenderit odit, pariatur dolor aperiam culpa omnis possimus earum ea eveniet. Tempora, repudiandae!'
    },
    {
      name: 'l8nyue',
      id: 4354,
      img: '../../public/wme-img-logo1.jpg',
      title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus explicabo provident sed ipsa nostrum, molestias, dolore reprehenderit odit, pariatur dolor aperiam culpa omnis possimus earum ea eveniet. Tempora, repudiandae!'
    },
    {
      name: 'q8i5muy',
      id: 4354,
      img: '../../public/wme-img-logo1.jpg',
      title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus explicabo provident sed ipsa nostrum, molestias, dolore reprehenderit odit, pariatur dolor aperiam culpa omnis possimus earum ea eveniet. Tempora, repudiandae!'
    },
    {
      name: 'qwe',
      id: 4354,
      img: '../../public/wme-img-logo1.jpg',
      title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus explicabo provident sed ipsa nostrum, molestias, dolore reprehenderit odit, pariatur dolor aperiam culpa omnis possimus earum ea eveniet. Tempora, repudiandae!'
    },
    {
      name: 'i5mmiuke',
      id: 4354,
      img: '../../public/wme-img-logo1.jpg',
      title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus explicabo provident sed ipsa nostrum, molestias, dolore reprehenderit odit, pariatur dolor aperiam culpa omnis possimus earum ea eveniet. Tempora, repudiandae!'
    }
  ]
  
  return arr
}

export default function Home({ loaderData }: Route.ComponentProps) {

  console.log(loaderData);

  const [arr, setArr] = useState<any>(loaderData)

  console.log(arr);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Main page</h1>
      <Suspense>
        <div className="my-10">
          <NewLIst arr={arr} />
        </div>
      </Suspense>
    </>
  );
}
