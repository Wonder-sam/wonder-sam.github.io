export default function NotFound() {
    return (
        <div className="w-full h-screen justify-center items-center grainy-bg bg-[linear-gradient(to_right,#202123ef_60%,#8383811d_150%),url('/wood.jpg')] bg-no-repeat bg-cover bg-center py-16 px-10 md:px-12 lg:px-16 xl:px-32 flex flex-col gap-y-16">
            <div className="flex flex-col items-center z-20 gap-3 mb-10">
                <div className="w-[40%] md:w-[30%] lg:w-[20%]">
                    <img
                        src="/coffee.png"
                        className="aspect-square w-full object-cover"
                    />
                </div>
                <p className="text-3xl lg:text-5xl text-[#ec9d62] text-center">This page is on a coffee break.</p>
                <button
                    className="bg-[#ec9d62] py-2 px-10 rounded-xl text-xs md:text-base mt-5"
                >
                    Return to Homepage
                </button>
            </div>
        </div>
    )
}