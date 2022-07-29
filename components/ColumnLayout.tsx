function ColumnLayout({ children }) {
    return (
        <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10'>
            {children}
        </div>
    )
}

export default ColumnLayout