import ProjectCard from "../components/cards/project-card";

export default function ProjectsPage() {

    return (
        <div className="w-full flex flex-col">
            <div className="relative h-screen xl:h-[60vh] w-full pt-20 bg-[linear-gradient(to_bottom,#202123ec_55%,#20212355),url('/wood.jpg'),url('/projects.jpeg')] xl:bg-[linear-gradient(to_right,#202123ec_55%,#20212355),url('/wood.jpg'),url('/projects.jpeg')] bg-no-repeat bg-size-[cover,auto_50%,auto_50%] xl:bg-size-[cover,auto_100%,auto_100%] bg-position-[center,top,bottom] xl:bg-position-[center,left,right] overflow-hidden">
                <div className="w-[80%] xl:w-[50%] flex flex-col items-center absolute left-[50%] top-[30%] xl:top-[50%] -translate-y-[30%] xl:-translate-y-[50%] -translate-x-[50%] gap-y-3">
                    {/* <p className="uppercase font-semibold text-2xl xl:text-3xl text-[#ec9d62]">diligencia</p> */}
                    <p className="text-4xl xl:text-6xl font-bold text-transparent w-fit bg-[linear-gradient(45deg,#ec9d62_40%,#ffffff_70%)] bg-clip-text">Projects</p>
                    <p className="text-center xl:text-left text-white text-sm xl:text-xl italic">
                        "Character cannot be developed in ease and quiet. Only through experience of trial and suffering
                        can the soul be strengthened, vision cleared, ambition inspired and success achieved."
                    </p>
                    <p className="text-[#ec9d62] self-end">—Helen Keller</p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-y-16 px-5 md:px-16 lg:px-32 xl:px-56 py-16 bg-[radial-gradient(#2021239d,#202123dc_55%),url('/p-top.jpg'),url('/p-bottom.jpg')] bg-no-repeat bg-size-[cover,100%_50%,100%_50%] bg-position-[center,top,bottom]">
                <p className="text-4xl font-semibold self-center text-[#ffffff]">What to Expect</p>
                <div className="w-full flex flex-col gap-y-16">
                    {
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                index={index}
                                project={project}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export const projects = [
    {
        id: 0,
        title: "QuiverTech - Website",
        about: "The official website for quivertech solutions. ",
        stack: "Frontend Web Development",
        link: "www.gish.com",
        stacks: [
            "React-Vite"
        ],
        github: "",
        image: "/preview.png",
        url: "https://quivertech.co"
    },
    {
        id: 1,
        title: "La Bethel YPG - Website & Web Application",
        about: "A management system for La Bethel youth group to help executives keep tabs on their members, manage attendance, draw budgets, etc.",
        stack: "Full Stack Development",
        link: "www.gish.com",
        stacks: [
            "React-Vite",
            "Node Js(Express)",
            "PostgreSql DB"
        ],
        github: "",
        image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=3596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "https://ypg-delta.vercel.app"
    },
    {
        id: 2,
        title: "AB Pastries - Website",
        about: "An e-commmerce site for a pastry shop. ",
        stack: "Frontend Web development",
        link: "www.gish.com",
        github: "",
        stacks: [
            "React-Vite"
        ],
        image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=3596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "https://ab-pastries.vercel.app"
    },

    {
        id: 3,
        title: "StrongerUs - Website",
        about: "A website for a company with booking services.",
        stack: "Frontend Web development",
        link: "www.gish.com",
        stacks: [
            "React"
        ],
        github: "",
        image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=3596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "https://stronger-us.vercel.app/"
    },
]