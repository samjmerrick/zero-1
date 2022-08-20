
function Section(props: {
    id: string,
    children: React.ReactNode,
}) {
    return (
        <section id={props.id} className='space-y-8 py-12'>
            {props.children}
        </section>
    )
}

export default Section