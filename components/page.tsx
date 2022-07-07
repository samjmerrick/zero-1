function Content({ children }) {
    return (
        <div className='px-10 my-20 w-full space-y-8  relative'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className=' w-screen relative flex items-center'>
            {children}
        </section>
    )
}

function PageFull({ children, id }) {
    return (
        <section id={id} className=' w-screen h-screen relative flex items-center'>
            {children}
        </section>
    )
}

export { Page, PageFull, Content };