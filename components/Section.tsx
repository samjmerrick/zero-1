
function Section(props: {
    id: string,
    title: string,
    children: React.ReactNode,
}) {
    return (
        <section id={props.id} className='space-y-8 py-20'>
            <h2 className="text-center">{props.title}</h2>
            {props.children}
        </section>
    )
}

export default Section