
function Section(props: {
    id: string,
    children: React.ReactNode,
}) {
    return (
        <section id={props.id} className='space-y-8 py-20'>
            {props.children}
        </section>
    )
}

export default Section