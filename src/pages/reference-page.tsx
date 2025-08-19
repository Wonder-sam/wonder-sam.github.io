import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router";

export default function ReferencePage() {
    return (
        <div className="w-full flex flex-col">
            <div className="relative h-screen xl:h-[60vh] w-full pt-20 bg-[linear-gradient(to_bottom,#202123ec_55%,#20212355),url('/wood.jpg'),url('/projects.jpeg')] xl:bg-[linear-gradient(to_right,#202123ec_55%,#20212355),url('/wood.jpg'),url('/projects.jpeg')] bg-no-repeat bg-size-[cover,auto_50%,auto_50%] xl:bg-size-[cover,auto_100%,auto_100%] bg-position-[center,top,bottom] xl:bg-position-[center,left,right] overflow-hidden">
                <div className="w-[80%] xl:w-[50%] flex flex-col items-center absolute left-[50%] top-[30%] xl:top-[50%] -translate-y-[30%] xl:-translate-y-[50%] -translate-x-[50%] gap-y-3">
                    {/* <p className="uppercase font-semibold text-2xl xl:text-3xl text-[#ec9d62]">diligencia</p> */}
                    <p className="text-4xl xl:text-6xl font-bold text-transparent w-fit bg-[linear-gradient(45deg,#ec9d62_40%,#ffffff_70%)] bg-clip-text">References</p>
                    <p className="text-center xl:text-left text-white text-sm xl:text-xl italic">
                        "Character cannot be developed in ease and quiet. Only through experience of trial and suffering
                        can the soul be strengthened, vision cleared, ambition inspired and success achieved."
                    </p>
                    <p className="text-[#ec9d62] self-end">—Helen Keller</p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-y-16 px-5 md:px-16 lg:px-32 xl:px-56 py-16 bg-[radial-gradient(#2021239d,#202123dc_55%),url('/p-top.jpg'),url('/p-bottom.jpg')] bg-no-repeat bg-size-[cover,100%_50%,100%_50%] bg-position-[center,top,bottom]">
                <p className="text-4xl font-semibold self-center text-[#ffffff]">Go Ahead and Ask Them</p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  gap-10">
                    {
                        references.map((item, index) => (
                            <div key={index} className="relative w-full flex flex-col justify-end pt-10">
                                <div className="absolute top-0 left-[50%] -translate-x-[50%] w-[70%] aspect-square rounded-full bg-gray-500 z-20 overflow-hidden">
                                    <img src={item?.image} className="w-full h-full object-cover object-top" />
                                </div>
                                <div key={index} className="relative w-full h-full flex flex-col items-center rounded-xl p-10 gap-y-5 shadow-md pt-[65%]">
                                    <div className='card-bg before:rounded-xl overflow-hidden' />
                                    <div className="w-full relative z-20 flex flex-col items-center">
                                        <p className="text-xs text-white/80">{item.expertise}</p>
                                        <p className="font-medium text-white">{item?.name}</p>
                                    </div>
                                    <div className="w-full z-20">
                                        <p className="text-center text-[#ec9d62]">{item?.description}</p>
                                    </div>
                                    <div className="w-[80%] flex gap-x-10 items-center justify-center z-20">
                                        <Link to={item?.instagram}>
                                            <BsInstagram className="text-white text-2xl" />
                                        </Link>
                                        <Link to={item?.x}>
                                            <BsTwitterX className="text-white text-2xl" />
                                        </Link>
                                        <Link to={item?.youtube}>
                                            <BsLinkedin className="text-white text-2xl" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const references = [
    {
        expertise: "Software Engineer",
        name: "Christian Abrokwa",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatem quis quia accusantium mollitia nulla quidem molestiae voluptatum, qui rerum provident nisi, at dicta odio itaque corporis temporibus quas esse.",
        instagram: "",
        x: "",
        facebook: "",
        youtube: "",
        image: "/references/daquiver.jpeg",
    },
    {
        expertise: "ML Engineer",
        name: "Etorman Alfred Klu",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatem quis quia accusantium mollitia nulla quidem molestiae voluptatum, qui rerum provident nisi, at dicta odio itaque corporis temporibus quas esse.",
        instagram: "",
        x: "",
        facebook: "",
        youtube: "",
        image: "/references/klutse.jpeg"
    },
    {
        expertise: "UI/UX Designer",
        name: "Peter Amexo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatem quis quia accusantium mollitia nulla quidem molestiae voluptatum, qui rerum provident nisi, at dicta odio itaque corporis temporibus quas esse.",
        instagram: "",
        x: "",
        facebook: "",
        youtube: "",
        image: "https://smurfmagic.com/layout_en/images/contents/smurf09.png"

    },
]