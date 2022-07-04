function Content({ children }) {
    return (
        <div className='px-10 my-20 w-full space-y-8 overflow-x-auto overflow-y-hidden relative'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className='h-screen w-screen relative flex items-center'>
            {children}
        </section>
    )
}

export { Page, Content };