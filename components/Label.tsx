function Label(
    props: {
        children: React.ReactNode,
    }
) {
    return (
        <span
            className="p-2 mr-2 bg-slate-600 rounded-lg inline text-sm font-bold align-middle whitespace-nowrap"
        >
            {props.children}
        </span>
    )
}

export default Label