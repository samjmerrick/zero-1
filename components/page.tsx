function Content({ children }) {
    return (
        <div className='px-10 my-20 w-full flex flex-col space-y-8 relative'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className='w-screen flex'>
            {children}
        </section>
    )
}

function PageFull({ children, id }) {
    return (
        <section id={id} className='w-screen h-screen flex items-center '>
            {children}
        </section>
    )
}

export { Page, PageFull, Content };