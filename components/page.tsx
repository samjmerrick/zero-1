function Content({ children }) {
    return (
        <div className='px-10 mt-10 space-y-8'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className='lg:h-screen relative flex items-center'>
            {children}
        </section>
    )
}

export { Page, Content };