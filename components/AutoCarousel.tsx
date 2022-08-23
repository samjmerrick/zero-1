import Marquee from "react-fast-marquee";

function AutoCarousel(
    props: {
        children: React.ReactNode,
    }
) {
    return (
        <Marquee gradientColor={[15, 23, 42]} gradientWidth={100} speed={30}>
            <div className="flex flex-row space-x-20 px-10 py-5">
                {props.children}
            </div>
        </Marquee>
    )
}
export default AutoCarousel;