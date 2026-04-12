import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "../../providers/progress-provider";
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useRef, useState } from "react";

interface props {
    name: string;
    skillLevel: number;
    icon: any;
    rank: string;
}
export default function SkillCard({ icon, name, skillLevel, rank }: props) {
    const objectRef = useRef<any>(null)
    const [value, setValue] = useState(0)

    function isElementVisible(element: any) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (isElementVisible(objectRef?.current)) {
                setValue(skillLevel)
            }
            else {
                setValue(0)
            }
        })
    }, [])

    return (
        <div className="relative w-full flex rounded-xl p-10 gap-y-3 shadow-md">
            <div className='card-bg before:rounded-xl overflow-hidden' />
            <div className="relative w-full flex flex-col justify-between gap-y-2">
                <div className="w-fit flex items-center justify-center bg-[#333333] h-fit aspect-square p-3 rounded-full">
                    {icon}
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-[#ec9d62] font-semibold text-xl">{name}</p>
                    <p className="text-white">{rank}</p>
                </div>
            </div>
            <div ref={objectRef} className="relative w-[40%]">
                <ProgressProvider valueStart={10} valueEnd={value}>
                    {(value: number) => <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        className='stroke-[#ec9d62]'
                        styles={buildStyles({
                            pathColor: `#ec9d62`,
                            trailColor: '#333333',
                            rotation: 0.55
                        })}
                    />}
                </ProgressProvider>

            </div>
        </div>
    )
}