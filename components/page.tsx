
function Content({ children }) {
    return (
        <div className='relative py-5 px-5 md:px-10 mt-20 w-full flex flex-col space-y-8 '>
            {children}
        </div>
    )
}

function Section({ children, id }) {
    return (
        <section id={id} className='w-full '>
            {children}
        </section>
    )
}

function SectionFull({ children, id }) {
    return (
        <section id={id} className='w-full h-screen flex items-center '>
            {children}
        </section>
    )
}

export { Section, SectionFull, Content };