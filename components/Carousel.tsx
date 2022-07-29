import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';

function Carousel({ children }) {

    const distance = 200;

    function scrollLeft() {
        document.getElementById('carousel').scrollBy({
            left: -distance,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        document.getElementById('carousel').scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }

    return (
        <div className="flex flex-row space-x-5">
            <button onClick={scrollLeft} className="hidden lg:inline">
                <Icon path={mdiArrowLeft} size={2.5} />
            </button>
            <span className="flex flex-row space-x-5 md:space-x-10 no-scrollbar overflow-auto" id="carousel">
                {children}
            </span>
            <button onClick={scrollRight} className="hidden lg:inline">
                <Icon path={mdiArrowRight} size={2.5} />
            </button>
        </div>
    )
}

export default Carousel