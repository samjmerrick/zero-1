function ImageCard(props: {
    imagePath: string,
    url: string,
    children: React.ReactNode,
}) {

    function openUrl(url: string) {
        window.open(url, '_blank');
    }

    return (
        <div
            className=' 
            bg-slate-800 
            hover:bg-slate-700 
                rounded-lg 
                p-5 
                md:p-8
                w-full 
                flex 
                flex-col
                md:flex-row 
                md:space-x-10
                items-center
                cursor-pointer
                '
            onClick={() => openUrl(props.url)}
        >
            <img
                src={props.imagePath}
                className='
                rounded-lg 
                md:w-1/2 
                md:h-1/2
                '
            />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ImageCard