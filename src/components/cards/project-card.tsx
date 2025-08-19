import { CgAttachment } from "react-icons/cg";
import { RiGithubFill } from "react-icons/ri";
import { useEffect, useState } from "react"
import { getLinkPreview } from "link-preview-js";
import { Link } from "react-router";

interface props {
    project: any;
    index: number
}
export default function ProjectCard({ project, index }: props) {
    const [preview, setPreview] = useState("")

    useEffect(() => {
        getLinkPreview(project?.url).then((data: any) => {
            // console.log(data)
            setPreview(data?.images[0])
        })
            .catch((_) => {
                // console.log(err)
            })
    }, [])

    return (
        <div className="w-full">
            {
                index % 2 === 0 ?
                    <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16`}>
                        <div className={`w-full md:w-[40%] shadow-lg shadow-[#ec9d62] rounded-lg`}>
                            <img src={preview !== "" ? preview : project.image} alt={project.title} className={`w-full aspect-[1.5] lg:aspect-video object-cover rounded-lg`} />
                        </div>
                        <div className={`w-full lg:w-[60%] tracking-widest flex flex-col gap-y-5`}>
                            <div className="w-full">
                                <p className={`mb-1.5 bg-[linear-gradient(90deg,#ec9d62_23.7%,#202123_100%)] text-transparent bg-clip-text uppercase text-sm font-semibold`}>{project.title}</p>
                                <p className={`text-[#ffffff] !text-sm md:!text-base w-[90%]`}>{project.about}</p>
                                <p className={`mt-5 mb-2 text-xs text-[#D2D2D2]`}>{project.stack}</p>
                                <div className="flex items-center gap-x-3">
                                    {
                                        project.stacks.map((item: string, index: number) => (
                                            <div key={index} className="bg-[#ec9d6259] px-4 py-2 rounded-xl text-xs text-[#ec9d62]">
                                                <p>{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={`flex justify-between w-fit gap-x-3 items-center`}>
                                <RiGithubFill className="text-xl text-white" />
                                <CgAttachment className="text-xl text-white" />
                            </div>
                            <Link to={`${project?.id}`} className={`w-fit rounded-full uppercase text-sm font-semibold bg-[linear-gradient(90deg,#ec9d62_23.7%,#202123_100%)] bg-clip-border border-transparent overflow-hidden p-1`}>
                                <div className={`px-5 py-2 rounded-full`}>
                                    <p className={`text-transparent bg-[linear-gradient(90deg,#ffffff_23.7%,#ffffff_100%)] bg-clip-text`}>view work</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16`}>
                        <div className={`hidden md:flex w-full lg:w-[60%] flex-col gap-y-5`}>
                            <div className="w-full">
                                <p className={`mb-1.5 bg-[linear-gradient(90deg,#ec9d62_23.7%,#202123_100%)] text-transparent bg-clip-text uppercase text-sm font-semibold`}>{project.title}</p>
                                <p className={`text-[#ffffff] !text-sm md:!text-base w-[90%]`}>{project.about}</p>
                                <p className={`mt-5 mb-2 text-xs text-[#D2D2D2]`}>{project.stack}</p>
                                <div className="flex items-center gap-x-3">
                                    {
                                        project.stacks.map((item: string, index: number) => (
                                            <div key={index} className="bg-[#ec9d6259] px-4 py-2 rounded-xl text-xs text-[#ec9d62]">
                                                <p>{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={`flex justify-between w-fit gap-x-3 items-center`}>
                                <RiGithubFill className="text-xl text-white" />
                                <CgAttachment className="text-xl text-white" />
                            </div>
                            <Link to={`${project?.id}`} className={`w-fit rounded-full  uppercase text-sm font-semibold bg-[linear-gradient(90deg,#ec9d62_23.7%,#202123_100%)] bg-clip-border border-transparent overflow-hidden p-1`}>
                                <div className={`px-5 py-2 rounded-full`}>
                                    <p className={`text-transparent bg-[linear-gradient(90deg,#ffffff_23.7%,#ffffff_100%)] bg-clip-text`}>view work</p>
                                </div>
                            </Link>
                        </div>
                        <div className={`w-full md:w-[40%] shadow-lg shadow-[#ec9d62] rounded-lg`}>
                            <img src={project?.id !== "" ? preview : project.image} alt={project.title} className={`w-full aspect-[1.5] lg:aspect-video object-cover rounded-lg`} />
                        </div>
                        <div className={`md:hidden w-full xl:w-[60%] flex flex-col gap-y-5`}>
                            <div className="w-full">
                                <p className={`mb-1.5 bg-[linear-gradient(90deg,#ec9d62_23.7%,#202123_100%)] text-transparent bg-clip-text uppercase text-sm font-semibold`}>{project.title}</p>
                                <p className={`text-[#ffffff] !text-sm md:!text-base w-[90%]`}>{project.about}</p>
                                <p className={`mt-5 mb-2 text-xs text-[#D2D2D2]`}>{project.stack}</p>
                                <div className="flex items-center gap-x-3">
                                    {
                                        project.stacks.map((item: string, index: number) => (
                                            <div key={index} className="bg-[#ec9d6259] px-4 py-2 rounded-xl text-xs text-[#ec9d62]">
                                                <p>{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={`flex justify-between w-fit gap-x-3 items-center`}>
                                <RiGithubFill className="text-xl text-white" />
                                <CgAttachment className="text-xl text-white" />
                            </div>
                            <Link to={`${project?.id}`} className={`w-fit rounded-full uppercase text-sm font-semibold bg-[linear-gradient(90deg,#ec9d62_23.7%,#202123_100%)] bg-clip-border border-transparent overflow-hidden p-1`}>
                                <div className={`px-5 py-2 rounded-full`}>
                                    <p className={`text-transparent bg-[linear-gradient(90deg,#ffffff_23.7%,#ffffff_100%)] bg-clip-text`}>view work</p>
                                </div>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    )
}