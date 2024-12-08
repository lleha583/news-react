import { useEffect } from "react";
import { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
      { title: "NEWSSSSS!" },
      { name: "description", content: "Welcome to React Router!" },
    ];
  }
  
export async function Loader() {
  
}

export default function newsPage({ 
  loaderData
}: Route.ComponentProps) {

    return (
        <div>
          <div>
            <img src="" />
          </div>
          <div>
              <h1>title</h1>
              <p>text</p>
          </div>
        </div>
    )
};
