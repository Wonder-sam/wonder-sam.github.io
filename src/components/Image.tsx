import { useEffect, useState } from "react";

type props = React.ImgHTMLAttributes<HTMLImageElement> & {
    url?: string;
    placeholder?: string;
}

export default function Image({ url = "", placeholder = "/web-shopping.svg", ...rest }: props) {
    const [imageUrl, setImageUrl] = useState(url)
    const [className, setClassName] = useState("")

    useEffect(() => {
        if (url === "" || url === null || url === undefined) {
            setImageUrl(placeholder)
        }
        else {
            setImageUrl(url)
        }
    }, [url])

    return (
        <img
            {...rest}
            src={imageUrl}
            className={`${rest.className} ${className}`}
            onError={() => {
                setImageUrl(placeholder)
                setClassName("object-contain!")
            }}
        />
    )
}