import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { Link, NavLink } from "react-router"
import Image from "./Image";
import { IoCloseCircle } from "react-icons/io5";

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const inactiveClassName = "text-white  px-6 py-1.5"
    const activeClassName = "text-[#ec9d62] px-6 py-1.5 rounded-xl underline underline-offset-4"

    return (
        <div className="absolute top-0 left-0 w-full py-2 flex items-center px-5 md:px-10 z-50 justify-between">
            <div className="lg:hidden" onClick={() => setMenuVisible(true)}>
                <FiMenu className="text-white text-3xl" />
            </div>
            {
                menuVisible &&
                <div tabIndex={0} className="fixed flex flex-col gap-10 top-0 left-0 bottom-0 right-0 bg-[radial-gradient(#2021239d,#202123dc_55%),url('/p-top.jpg'),url('/p-bottom.jpg')] bg-no-repeat bg-size-[cover,100%_50%,100%_50%] bg-position-[center,top,bottom] w-full h-screen z-50 px-10 py-10 lg:hidden">
                    <div className="w-[15%]">
                        <Image
                            url="/be-logo.png"
                        />
                    </div>
                    <div className="absolute top-5 right-5 px-3">
                        <button className="bg-secondary p-2 aspect-square rounded-full" onClick={() => setMenuVisible(false)}>
                            <IoCloseCircle className="text-white text-3xl" />
                        </button>
                    </div>
                    <div className="w-fit flex flex-col gap-2.5 text-base items-start space-grotesk-regular">
                        {
                            topTabs.map((item, index) => (
                                <NavLink
                                    to={`${item?.route}`}
                                    key={index}
                                    className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setMenuVisible(false)
                                    }}
                                >
                                    {item?.title}
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            }
            <div className="w-16 aspect-square p-3 hidden lg:block">
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
            <div className="min-w-fit w-fit">
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