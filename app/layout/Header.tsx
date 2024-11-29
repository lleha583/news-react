import { Link } from "react-router";

export default function Header() {
    return (
        <header className="absolute left-0 top-0 flex justify-between items-center w-full h-16 border-b-2 border-neutral-400 px-4 bg-white">
            <h1 className="text-5xl font-bold">NEWS</h1>
            <nav>
                <ul className="flex gap-7">
                    <li className="text-2xl">
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className="text-2xl">
                        <Link to={'/tecnologies'}>
                            Tecnologies
                        </Link>
                    </li>
                    <li className="text-2xl">
                        <Link to={''}>
                            Science
                        </Link>
                    </li>
                    <li className="text-2xl">
                        <Link to={''}>
                            Sport
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>

            </div>
        </header>
    )
};
