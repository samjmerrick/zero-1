function Content({ children }) {
    return (
        <div className='px-10 my-20 space-y-8 overflow-x-auto relative'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className='lg:h-screen w-screen relative flex items-center'>
            {children}
        </section>
    )
}

export { Page, Content };