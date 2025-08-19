import { Link, NavLink } from "react-router"

export default function Header() {
    const inactiveClassName = "text-white  px-6 py-1.5"
    const activeClassName = "text-[#ec9d62] px-6 py-1.5 rounded-xl underline underline-offset-4"

    return (
        <div className="absolute top-0 left-0 w-full py-2 flex items-center px-5 md:px-10 z-50 justify-between">
            <div className="w-16 aspect-square p-3">
                <img src="/be-logo.png" className="w-full object-cover" />
            </div>
            <div className="w-full lg:flex items-center justify-center gap-x-10 hidden">
                {
                    topTabs.map((item, index) => (
                        <NavLink
                            to={`${item?.route}`}
                            key={index}
                            className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
                        >
                            {item?.title}
                        </NavLink>
                    ))
                }

            </div>
            <div className="min-w-fit">
                <Link
                    to="/cv"
                    className="bg-blue-500 px-4 py-2 min-w-fit rounded-xl text-sm text-white hover:cursor-pointer"
                >
                    View Resume
                </Link>

            </div>
        </div>
    )
}

const topTabs = [
    {
        title: "Home",
        route: "home",
    },
    {
        title: "Projects",
        route: "projects",
    },
    {
        title: "References",
        route: "references",
    },
    {
        title: "Gallery",
        route: "gallery",
    },
]