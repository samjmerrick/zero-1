function Content({ children }) {
    return (
        <div className='px-10 mt-10'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className='h-screen flex items-center'>
            {children}
        </section>
    )
}

export { Page, Content };