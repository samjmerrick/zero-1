import Nav from './nav'

function Page({ children, id }) {
    return (
        <div className="bg-slate-900 text-white">
            <Nav />
            <Section id={id}>
                <Content>
                    {children}
                </Content>
            </Section>
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


function Content({ children }) {
    return (
        <div className='relative py-5 px-5 md:px-10 mt-20 w-2/3 flex flex-col space-y-8 '>
            {children}
        </div>
    )
}


export { Page, Section, SectionFull, Content };