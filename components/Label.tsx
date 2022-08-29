function Label(
    props: {
        children: React.ReactNode,
    }
) {
    return (
        <div
            className="p-2 mr-2 bg-slate-600 rounded-lg inline text-sm align-middle whitespace-nowrap"
        >
            {props.children}
        </div>
    )
}

export default Label