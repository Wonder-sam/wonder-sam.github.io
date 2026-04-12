import { BsFacebook, BsInstagram, BsLinkedin, BsSlack, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";

export default function Footer() {
    return (
        <div className="w-full bg-[#1b1c1e] flex flex-col overflow-hidden">
            <div className="w-full flex flex-col lg:flex-row px-10 md:px-12 lg:px-16 xl:px-44 pt-20 pb-10 gap-y-5 ">
                <div className="w-fit flex flex-col gap-y-2">
                    <img src="be-logo.png" className="w-[10%] object-cover" />
                    <p className="text-[#ec9d62] text-sm">~ Be extraordinary</p>
                </div>
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col">
                        <p className="text-white italic">"The most certain way to succeed is always to try just one more time."</p>
                        <p className="text-[#ec9d62]">—Thomas Edison</p>
                    </div>
                    <div className="w-full flex">
                        <input
                            className="w-full bg-white rounded-tl-xl rounded-bl-xl px-5 placeholder:italic placeholder:text-sm"
                            placeholder="Message"
                        />
                        <button className="bg-[#ec9d62] rounded-tr-xl rounded-br-xl text-sm py-2.5 px-8 text-white">Send</button>
                    </div>
                    <div className="flex gap-x-10 items-center">
                        <Link to="https://www.instagram.com/es_es_en">
                            <BsInstagram className="text-white text-2xl" />
                        </Link>
                        <Link to="https://www.facebook.com/samuel.nai.777">
                            <BsFacebook className="text-white text-2xl" />
                        </Link>
                        <Link to="https://www.x.com/esesen">
                            <BsTwitterX className="text-white text-2xl" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/wonder-sam/">
                            <BsLinkedin className="text-white text-2xl" />
                        </Link>
                        {/* <BsYoutube className="text-white text-2xl" /> */}
                        {/* <BsSlack className="text-white text-2xl" /> */}
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#ec9d62] py-1.5 px-5 flex gap-x-5 items-center justify-center">
                <p className="text-white italic text-xs font-semibold">Designed by Wonder</p>
                <p className="text-white italic text-xs font-semibold">Developed by Wonder</p>
            </div>

        </div>
    )
}