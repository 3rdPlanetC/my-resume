import { useRef, useState, useEffect } from "react"
import { Skeleton } from '@material-ui/lab'
// import useIntersectionObserver from "../hooks/use-intersection-observer"

const image = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
}

const full = {
    transition: "opacity 400ms ease 0ms",
}

const thumb = {
    filter: "blur(10px)",
    // transform: "scale(1)",
    transition: "visibility 0ms ease 300ms",
}

const useIntersectionObserver = ({
    target,
    onIntersect,
    threshold = 0.1,
    rootMargin = "0px"
}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold
        })
        const current = target.current
        observer.observe(current)
        return () => {
            observer.unobserve(current)
        }
    })
}

const Image = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <>
            <img
                alt={props.alt}
                src={props.thumb}
                style={{ 
                    visibility: isLoaded ? "hidden" : "visible",
                    ...image,
                    ...thumb
                }}
                width="100%" height="250px"
            />
            <img
                onLoad={() => {
                    setIsLoaded(true)
                }}
                className="image full"
                style={{
                    opacity: isLoaded ? 1 : 0,
                    ...image,
                    ...full
                }}
                alt={props.alt}
                src={props.src}
                width="100%" height="250px"
            />
        </>
    )
}

const ImageContainer = props => {
    const ref = useRef()
    const [isVisible, setIsVisible] = useState(false)
    useIntersectionObserver({
        target: ref,
        onIntersect: ([ele], observerElement) => {
            if (ele.isIntersecting) {
                setIsVisible(true)
                observerElement.unobserve(ref.current)
            }
        }
    })
    const aspectRatio = (props.height / props.width) * 100
    return (
        <div
            ref={ref}
            className="image-container"
            style={{ 
                paddingBottom: `${aspectRatio}%`,
                position: "relative"
            }}
        >
        {isVisible && (
                <Image 
                    alt={props.alt}
                    thumb={props.src}
                    src={props.src}
                />
                // {/* <img className="image" src={props.src} alt={props.alt} width="100%" height="250px"/> */}
        )}
        </div>
    )
}

export default ImageContainer