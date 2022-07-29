function ImageCard(props: {
    title: string,
    caption: string,
    imagePath: string,
    url: string,

}) {

    function openUrl(url: string) {
        window.open(url, '_blank');
    }

    return (
        <div
            className=' bg-slate-800 rounded-lg p-10 max-w-md min-w-[90%] sm:min-w-[66%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[25%] cursor-pointer '
            onClick={() => openUrl(props.url)}
        >
            <img
                src={props.imagePath}
                title={props.title}
                className='rounded-lg w-full'
            />
            <h2>{props.title}</h2>
            <p className=''>{props.caption}</p>
        </div>
    )
}

export default ImageCard