export default function CVPage() {
    return (
        <div className="w-full h-screen pt-20 grainy-bg bg-[linear-gradient(to_right,#202123ef_60%,#8383811d_150%),url('/wood.jpg')] bg-right bg-cover bg-no-repeat">
            <div className="w-full h-full relative">
                <div className="absolute top-0 right-0 left-0 bottom-0" />
                <iframe
                    src={"https://docs.google.com/document/d/1_jaUducEizzWs1Wh4Xguwjw6azo5sUVqpGne23ckqnI/preview?usp=drive_link"}
                    title="CV"
                    className="relative z-30 select-none"
                    width="100%"
                    height="100%"
                >
                </iframe>

            </div>
        </div>
    )
}