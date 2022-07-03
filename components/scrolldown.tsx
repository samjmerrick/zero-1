
function ScrollDown(props: {
    label: string,
    id: string,
}) {
    return <div className='hidden lg:inline absolute right-0 bottom-0 p-10'>
        <a href={props.id}>
            <p>
                ↓ {props.label}
            </p>
        </a>
    </div>
}

export default ScrollDown