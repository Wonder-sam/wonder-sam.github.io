import { useEffect, useRef, useState } from "react"
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs"

export default function GalleryPage() {
    const [slideImages, setSlideImages] = useState<any[]>([])
    const [slideVisible, setSlideVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const slideCarousel = (index: number) => {
        const elements = document.getElementsByClassName('slider-card');

        // Scroll to the element, aligning it to the top
        console.log(index)
        elements[index].scrollIntoView();
    }

    useEffect(() => {
        if (slideVisible) {
            let elements = document.getElementsByClassName('slider-card');
            let currIndex = currentIndex;
            let lastScrollTop = elements[currIndex]?.getBoundingClientRect().left;
            carouselRef?.current?.addEventListener("scrollend", () => {
                elements = document.getElementsByClassName('slider-card');
                var st = elements[currIndex]?.getBoundingClientRect();
                console.log(lastScrollTop)
                console.log(st.left)
                if (st.left > lastScrollTop) {
                    // left scrolled
                    lastScrollTop = elements[currIndex - 1]?.getBoundingClientRect().left;
                    currIndex = currIndex - 1
                    console.log("hmm")
                } else if (st.left < lastScrollTop) {
                    // right scrolled
                    lastScrollTop = elements[currIndex + 1]?.getBoundingClientRect().left;
                    currIndex = currIndex + 1
                    console.log("abb")
                }
                setCurrentIndex(currIndex)
                console.log(currIndex)
                console.log(lastScrollTop)
            })
        }
        else {
            carouselRef?.current?.removeEventListener("scrollend", () => { })
        }
    }, [slideVisible])

    return (
        <div className="w-full flex flex-col">
            <div className="relative h-screen md:h-[70vh] w-full pt-20 bg-[linear-gradient(to_bottom,#202123ec_100%,#20212355),url('/gall.jpeg')] md:bg-[linear-gradient(to_right,#202123ec_60%,#2021239d),url('/gallery1.jpg'),url('/gall.jpeg')] bg-no-repeat bg-size-[cover,cover] md:bg-size-[cover,50%_auto,50%_auto] bg-position-[bottom,top] md:bg-position-[right,left] overflow-hidden">
                <div className="w-fit flex flex-col items-center absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] gap-y-3">
                    <p className="text-6xl font-bold text-transparent w-fit bg-[linear-gradient(45deg,#ec9d62_40%,#ffffff_70%)] bg-clip-text">Gallery</p>
                    <p className="text-center text-white font-semibold text-3xl">
                        “Memories are the key not to the past but to the future."
                    </p>
                    <p className="text-center text-[#ec9d62] self-center">— Corrie Ten Boom, Clippings from My Notebook (1982)</p>
                </div>
            </div>
            <div className="w-full px-5 sm:px-10 md:px-16 lg:px-32 py-16 bg-[radial-gradient(#3333339d,#333333ef_55%),url('/drops.jpg')] bg-no-repeat bg-cover bg-center flex flex-col gap-12 md:gap-16">
                <p className="text-4xl font-semibold self-center text-[#ffffff]">My Story</p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
                    {
                        gallery.map((item, index) => (
                            <div key={index} className="relative bg-[#ec9d62] aspect-square rounded-3xl p-4 overflow-hidden shadow-md"
                                onClick={() => {
                                    setSlideImages(item?.images)
                                    setSlideVisible(true)
                                }}
                            >
                                <div className="w-full bg-white h-full rounded-3xl overflow-hidden">
                                    <img src={item?.cover} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute w-full h-[40%] bottom-0 right-0 z-30">
                                    <div className="absolute bottom-0 bg-[#ec9d62] w-full h-[45%]" />
                                    <div className="absolute bottom-[40%] bg-[#ec9d62] w-[50%] right-0 h-[40%] rounded-tl-[60%_100%]" />
                                    <p className="absolute bottom-[12%] -translate-y-[12%] left-[5%] text-white text-xl font-semibold">{item?.title}</p>
                                    <div className="absolute w-[20%] aspect-square right-[10%] top-[70%] -translate-y-[70%] -translate-x-[10%]">
                                        <img src="/be-logo.png" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                slideVisible &&
                <div
                    onDoubleClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setSlideVisible(false)
                    }}

                    tabIndex={0} className="w-full h-full flex flex-col justify-center items-center fixed bg-[#000000fd] z-50 top-0 left-0 right-0 bottom-0 overflow-hidden">
                    <div className="absolute top-[3%] right-[3%] bg-white hover:cursor-pointer rounded-full p-1.5" onClick={() => setSlideVisible(false)}>
                        <BsX className="text-black text-2xl" />
                    </div>

                    <div className="absolute top-[50%] -translate-y-[50%] right-[3%] bg-white hover:cursor-pointer rounded-full p-1.5" onClick={() => slideCarousel(currentIndex + 1)}>
                        <BsChevronRight className="text-black text-2xl" />
                    </div>
                    <div className="absolute top-[50%] -translate-y-[50%] left-[3%] bg-white hover:cursor-pointer rounded-full p-1.5" onClick={() => slideCarousel(currentIndex - 1)}>
                        <BsChevronLeft className="text-black text-2xl" />
                    </div>
                    <div ref={carouselRef} className="w-full h-[80%] flex overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-x-[10%] no-scrollbar">
                        {
                            slideImages.map((item, index) => (
                                <div key={index} className="slider-card basis-full shrink-0 w-full h-full snap-center snap-always">
                                    <img src={item.url} className="w-full h-full object-contain" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

const gallery = [
    {
        title: "Unlost",
        cover: "/projects.jpeg",
        images: [
            {
                url: "/unlost/group-1.jpeg"
            },
            {
                url: "/unlost/group-2.jpeg"
            },
            {
                url: "/unlost/group-3.jpeg"
            },
            {
                url: "/unlost/group-4.jpeg"
            },
        ]
    },
    {
        title: "Graduation",
        cover: "/gallery.jpg",
        images: [
            {
                url: "/graduation/Nai-2.jpg"
            },
            {
                url: "/graduation/Nai-18.jpg"
            },
            {
                url: "/graduation/Nai-22.jpg"
            },
            {
                url: "/graduation/Nai-11.jpg"
            },
            {
                url: "/graduation/Nai-19.jpg"
            },
            {
                url: "/graduation/Nai-20.jpg"
            },
            {
                url: "/graduation/Squad-1.jpg"
            },
            {
                url: "/graduation/Squad-6.jpg"
            },
        ]
    }
]