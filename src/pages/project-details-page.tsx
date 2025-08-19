import { useParams } from "react-router"
import { projects } from "./project-page";

export default function ProjectDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const project = projects.find((el) => el.id?.toString() === id)

    return (
        <div className="w-full ">
            {
                project ?
                    <div className="w-full">
                        <div className="w-full flex flex-col items-center justify-center h-[60vh] bg-[linear-gradient(to_right,#333333ef,#333333ef),url('/wavy.jpg')] bg-no-repeat bg-cover bg-center">
                            <div className="flex flex-col items-center gap-y-2">
                                <p className="text-white text-5xl">{project?.title}</p>
                                <p className="text-[#ec9d62]">{project?.about}</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                        </div>
                    </div>
                    :
                    <div className="w-full h-screen flex flex-col gap-y-2 items-center justify-center bg-[linear-gradient(to_right,#333333ef,#333333ef),url('/wavy.jpg')] bg-no-repeat bg-cover bg-center">
                        <p className="text-white text-7xl">Are you lost?</p>
                        <p className="text-xxl text-[#ec9d62] underline underline-offset-3">Let's get you back</p>
                        <div className="w-full flex items-center h-[20vh] px-32 gap-x-5 mt-3">
                            {
                                projects.map((item, index) => (
                                    <div key={index} className="w-96 flex min-h-full h-full flex-col items-center gap-y-2">
                                        <div className="w-full min-h-full h-full basis-full bg-gray-400 overflow-hidden rounded-xl">
                                            <img src={item.image} />
                                        </div>
                                        <p className="text-white">{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }

        </div>
    )
}