import { useState } from "react";
import { Link } from "react-router"

export default function NewLIst({ news }) {

    const [data, setData] = useState(news.articles)

    console.log(data);

    return (
        <div className="flex flex-wrap gap-6 justify-center w-full">
            {
                data.map((item: any, index: number) => {
                    return (
                        <div className="w-96 p-3 box-border border my-8 border-neutral-400 rounded-xl" key={index}>
                            <Link to={`/news/${index}`}>
                                <img
                                    className="w-full"
                                    src={item.urlToImage}
                                    alt=""
                                />
                                <div>
                                    <h2>{item.title}</h2>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
};
