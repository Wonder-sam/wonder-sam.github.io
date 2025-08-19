import { BsCodeSlash, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsPhone, BsTelephone, BsTwitterX, BsWindowDesktop } from "react-icons/bs";
import { DiFirebase, DiGit, DiMysql, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import { GrDocker } from 'react-icons/gr';
import { RiHtml5Fill, RiJavaFill, RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiCplusplus, SiCss3, SiExpress, SiFastapi, SiNestjs } from 'react-icons/si';
import SkillCard from '../components/cards/skill-card';
import { BiLogoFlutter, BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { Link } from "react-router";
import { useEffect, useRef } from "react";

export default function HomePage() {
    const meRef =  useRef<HTMLDivElement>(null)

    useEffect(()=>{
        // if(meRef.current){
        //     meRef.current.style.opacity = "1"
        // }
    },[])

    return (
        <div className="w-full flex flex-col">
            <title>Wonder - Home</title>
            <div className="relative w-full grainy-bg bg-[linear-gradient(to_right,#202123ef_60%,#8383811d_150%),url('/wood.jpg')] bg-right bg-cover bg-no-repeat h-screen flex pt-20 overflow-hidden">
                <div className='absolute w-full md:w-[70%] xl:w-[50%] flex flex-col gap-y-10 top-[25%] xl:top-[50%] left-[20%] -translate-y-[25%] xl:-translate-y-[50%] -translate-x-[20%] px-10 xl:px-0'>
                    <div className="flex flex-col gap-y-3">
                        <p className=' text-white text-2xl lg:text-5xl duration-75 ease-in transition-all 2xl:text-6xl font-semibold animate-[color-anime]'>Hi, <span>I'm Samuel Sowah Nai</span></p>
                        <p className='text-3xl xl:text-4xl font-bold text-[#ec9d62]'>Full Stack Developer</p>
                    </div>
                    <p className="text-white text-xs md:text-base h-0 animate-expand overflow-hidden transition-all">
                        Young, motivated and hardworking lad. You're not here by chance, you're here because we can  help each other. Go ahead and hit me  up!
                    </p>
                    <div className="flex gap-x-5">
                        <button
                            className="bg-[#ec9d62] py-2 px-10 rounded-xl text-xs md:text-base"
                        >
                            Hire Me
                        </button>
                        <button
                            className="border border-[#ec9d62] text-[#ec9d62] py-2 px-10 rounded-xl text-xs md:text-base"
                        >
                            Let's Talk
                        </button>
                    </div>
                </div>
                <div ref={meRef} className="z-20 w-[80%] md:w-[50%] absolute right-0 bottom-0 2xl:top-0 opacity-0 animate-fadeIn">
                    <img src="/wonder-only.png" className="w-full object-cover" />
                </div>
                <div className="absolute w-full xl:w-[70%] px-10 xl:px-0 bottom-[10%] left-[50%] -translate-x-[50%] flex flex-col md:flex-row item-center justify-between gap-y-10 z-20">
                    <div className="flex flex-col md:flex-row gap-y-5 gap-x-24">
                        <div className="flex gap-x-3">
                            <div className=" bg-[#ffffff5d] h-fit aspect-square p-3 rounded-full">
                                <BsTelephone className="text-[#ec9d62] text-2xl" />
                            </div>
                            <div className="text-sm">
                                <p className="uppercase text-white text-xs font-semibold mb-2">Contact Information</p>
                                <p className="text-white/50 underline">+233 (55) 154 0686</p>
                                <p className="text-white/50 underline">samuel.nai@yahoo.com</p>
                            </div>
                        </div>
                        <div className="flex gap-x-3">
                            <div className=" bg-[#ffffff5d] h-fit aspect-square p-3 rounded-full">
                                <BsGithub className="text-[#ec9d62] text-2xl" />
                            </div>
                            <div className="text-sm">
                                <p className="uppercase text-white text-xs font-semibold mb-2">Github Information</p>
                                <p className="text-white/50 underline">username: wonder-sam</p>
                                <p className="text-white/50 underline">samuel.nai@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-16 items-center">
                        <Link to="https://www.instagram.com/esesen">
                            <BsInstagram className="text-white text-3xl" />
                        </Link>
                        <Link to="https://www.facebook.com/samuel123">
                            <BsFacebook className="text-white text-3xl" />
                        </Link>
                        <Link to="https://www.x.com/esesen">
                            <BsTwitterX className="text-white text-2xl" />
                        </Link>
                        <Link to="https://www.youtube.com/esesen">
                            <BsLinkedin className="text-white text-3xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full px-10 lg:px-16 xl:px-32 py-16 bg-[linear-gradient(to_right,#333333ef,#333333ef),url('/wavy.jpg')] bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row gap-12 md:gap-16">
                <div className="w-full lg:w-[30%] flex flex-col gap-y-5">
                    <p className="text-center lg:text-left font-semibold text-3xl lg:text-4xl text-white">Professional <span className="text-[#ec9d62]">Skills</span></p>
                    <p className="text-white/90 text-sm md:text-base">Skills acquired through constant hardwork and applied in real world scenarios to solve real life problems.</p>
                </div>
                <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                    {
                        professions.map((item, index) => (
                            <div key={index} className="flex flex-col gap-y-2">
                                <div className="border-2 rounded-xl border-[#ec9d62] p-3 w-fit mb-1">
                                    {item?.icon}
                                </div>
                                <p className="text-white font-medium text-base xl:text-lg">{item?.title}</p>
                                <p className="text-sm md:text-base text-white/80">{item?.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full px-10 xl:px-32 py-16 bg-[linear-gradient(to_right,#2a2b2def,#2a2b2def),url('/ring.png')] bg-repeat bg-contain bg-center flex flex-col gap-12 lg:gap-y-16">
                <p className="text-center font-semibold text-3xl lg:text-4xl text-white">Trace<span className="text-[#ec9d62]">route</span></p>
                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <div className="w-full lg:w-[50%] flex flex-col">
                        <p className="font-semibold text-white text-lg lg:text-2xl mb-5">Education</p>
                        {
                            education.map((item, index) => (
                                <div key={index} className="flex gap-x-2">
                                    <div className="min-h-full w-5 flex flex-col items-center">
                                        <div className="w-5 h-5 shrink-0 rounded-full bg-[#ec9d62]" />
                                        <hr className={`${index + 1 == education.length ? "h-[calc(100%-15px)]" : "h-[calc(100%+150px)]"}  shrink-0 w-1 rotate-180 bg-[#ec9d62]`} />
                                    </div>
                                    <div className={`flex flex-col gap-y-2 bg-[#333333] shadow-[#ec9d62] rounded-xl p-5 shadow-md ${index + 1 !== education.length ? "mb-7" : "mb-0"}`}>
                                        <div>
                                            {/* <p className="text-[#ec9d62]">{dayjs(item.start_date).format("DD MMM YYYY")} - {dayjs(item.end_date).format("DD MMM YYYY")}</p> */}
                                            <p className="text-[#ec9d62]">{item.start_date} - {item.end_date}</p>
                                        </div>
                                        <div className="flex flex-col gap-y-1.5">
                                            <p className="text-white text-sm md:text-base">{item.certification} - {item.institution}</p>
                                            <p className="text-white/80 text-xs md:text-base">{item?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="w-full lg:w-[50%] flex flex-col">
                        <p className="font-semibold text-white text-lg lg:text-2xl mb-5">Experience</p>
                        {
                            experience.map((item, index) => (
                                <div key={index} className="flex gap-x-2">
                                    <div className="min-h-full w-5 flex flex-col items-center">
                                        <div className="w-5 h-5 shrink-0 rounded-full bg-[#ec9d62]" />
                                        <hr className={`${index + 1 == experience.length ? "h-[calc(100%-15px)]" : "h-[calc(100%+150px)]"}  shrink-0 w-1 rotate-180 bg-[#ec9d62]`} />
                                    </div>
                                    <div className={`flex flex-col gap-y-2 bg-[#333333] shadow-[#ec9d62] rounded-xl p-5 shadow-md ${index + 1 !== experience.length ? "mb-7" : "mb-0"}`}>
                                        <div>
                                            {/* <p className="text-[#ec9d62]">{dayjs(item.start_date).format("DD MMM YYYY")} - {dayjs(item.end_date).format("DD MMM YYYY")}</p> */}
                                            <p className="text-[#ec9d62]">{item.start_date} - {item.end_date}</p>
                                        </div>
                                        <div className="flex flex-col gap-y-1.5">
                                            <p className="text-white text-sm md:text-base">{item.position} - {item.company}</p>
                                            <p className="text-white/80 text-xs md:text-base">{item?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full bg-[linear-gradient(to_right,#333333ef,#333333ef),url('/langs.png')] bg-no-repeat bg-cover bg-center py-16 px-10 md:px-12 lg:px-16 xl:px-32 flex flex-col gap-y-16">
                <div className="w-full flex flex-col gap-y-5 items-center">
                    <p className="text-center xl:text-left font-semibold text-3xl lg:text-4xl text-white">Programming <span className="text-[#ec9d62]">Languages</span></p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        languages?.map((item, index) => (
                            <SkillCard
                                key={index}
                                name={item?.name}
                                icon={item?.icon}
                                skillLevel={item?.skillLevel}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-full bg-[linear-gradient(to_right,#333333ef,#333333ef),url('/langs.png')] bg-no-repeat bg-cover bg-center py-16 px-10 md:px-12 lg:px-16 xl:px-32 flex flex-col gap-y-16">
                <div className="w-full flex flex-col gap-y-5 items-center">
                    <p className="text-center xl:text-left font-semibold text-3xl lg:text-4xl text-white">Frame<span className="text-[#ec9d62]">works</span></p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        frameworks?.map((item, index) => (
                            <SkillCard
                                key={index}
                                name={item?.name}
                                icon={item?.icon}
                                skillLevel={item?.skillLevel}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-full bg-[linear-gradient(to_right,#333333ef,#333333ef),url('/langs.png')] bg-no-repeat bg-cover bg-center py-16 px-10 md:px-12 lg:px-16 xl:px-32 flex flex-col gap-y-16">
                <div className="w-full flex flex-col gap-y-5 items-center">
                    <p className="text-center xl:text-left font-semibold text-3xl lg:text-4xl text-white">Worked <span className="text-[#ec9d62]">With</span></p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        skills?.map((item, index) => (
                            <SkillCard
                                key={index}
                                name={item?.name}
                                icon={item?.icon}
                                skillLevel={item?.skillLevel}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const education = [
    {
        start_date: "2019-10-09",
        end_date: "2024-11-09",
        programme: "BsC Computer Science",
        certification: "Degree",
        institution: "University of Ghana",
        description: "Studied Mathematical Science and specialised in Computer Science. Notable courses undertaken include Object-Oriented Programming and Data Structures (Java), Intro to Design and Programming for Web (HTML & CSS), Operating Systems, Machine Learning, Introduction to Database Systems, Human Computer Interactions, Network Servers and Infrastructure."
    }
]

const experience = [
    {
        id: 2,
        start_date: "2024-10-09",
        end_date: "present",
        position: "Software Developer",
        company: "OmniStrategies",
        description: "Responsible for translating UI designs into code while maintaining responsiveness of the interface on various device screens. Also, tasked with developing RESTful APIs and their integration with frontend application. Maintaining and refactoring old code of already existing applications as well as helping my colleagues in debugging their codes form part of my day-to-day responsibilies."
    },
    {
        id: 1,
        start_date: "2023-10-09",
        end_date: "2024-10-09",
        position: "Service Personnel / Intern",
        company: "OmniStrategies",
        description: "Worked as software developer responsible for translating UI designs into code while maintaining responsiveness of the interface on various device screens. Also, developed RESTful APIs and worked on integration of frontend application with these APIs."
    },
    {
        id: 0,
        start_date: "2019-10-09",
        end_date: "2024-11-09",
        position: "Intern",
        company: "La Dade Kotopong Municipal Assembly",
        description: "Worked in the IT department. One achievement worth stating was the development of a web application to generate business certicates for registered businesses. This was accomplished using HTML, CSS, JQuery and PHP with a MySQL DB. Other tasks I was assinged included ensuring that other departments had their antivirus softwares updated and also managing devices such on printers on a network."
    }
]


const professions = [
    {
        title: "Web Development",
        description: "Web development, both static websites and web applications with the use of HTML, CSS and JS coupled with frameworks such React and Tailwind CSS to expedite the process.",
        icon: <BsWindowDesktop className="text-white text-3xl" />
    },
    {
        title: "Mobile Development",
        description: "Mobile development with React-Native(Bare), React-Native(Expo)and Flutter. This includes UI development and API integration.",
        icon: <BsPhone className="text-white text-3xl" />
    },
    {
        title: "API Development",
        description: "Development of RESTful APIs using frameworks such as Nodejs(Express) and FASTAPI. Accustomed with API documentation frameworks like Swagger and POSTMAN as well.",
        icon: <BsCodeSlash className="text-white text-3xl" />
    },
]


const languages = [
    {
        name: "HTML",
        skillLevel: 90,
        icon: <RiHtml5Fill className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "JS",
        skillLevel: 90,
        icon: <RiJavascriptFill className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "TS",
        skillLevel: 90,
        icon: <BiLogoTypescript className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Java",
        skillLevel: 70,
        icon: <RiJavaFill className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "C++",
        skillLevel: 70,
        icon: <SiCplusplus className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Python",
        skillLevel: 70,
        icon: <DiPython className="text-[#ec9d62] text-4xl" />
    }
]

const frameworks = [
    {
        name: "React",
        skillLevel: 90,
        icon: <DiReact className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "FastApi",
        skillLevel: 70,
        icon: <SiFastapi className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Express - Nodejs",
        skillLevel: 80,
        icon: <SiExpress className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Nest Js",
        skillLevel: 30,
        icon: <SiNestjs className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "React Native - Expo",
        skillLevel: 90,
        icon: <TbBrandReactNative className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Flutter",
        skillLevel: 50,
        icon: <BiLogoFlutter className="text-[#ec9d62] text-4xl" />
    }
]

const skills = [
    {
        name: "CSS",
        skillLevel: 90,
        icon: <SiCss3 className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Tailwind CSS",
        skillLevel: 90,
        icon: <RiTailwindCssFill className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Docker",
        skillLevel: 30,
        icon: <GrDocker className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "PostgreSQL",
        skillLevel: 80,
        icon: <DiPostgresql className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "MySQL",
        skillLevel: 80,
        icon: <DiMysql className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Firebase",
        skillLevel: 70,
        icon: <DiFirebase className="text-[#ec9d62] text-4xl" />
    },
    {
        name: "Git",
        skillLevel: 80,
        icon: <DiGit className="text-[#ec9d62] text-4xl" />
    },
]